<template>
    <a-popover v-if="!isLogin" placement="bottom">
        <template #content>
            <p><a-button type="text" @click="onLoginClicked">登录账号</a-button></p>
            <a-button type="text" @click="onRegisterClicked">注册账号</a-button>
        </template>
        <a-avatar :size="58">
            <template #icon>
                <UserOutlined />
            </template>
        </a-avatar>
    </a-popover>

    <a-popover v-else placement="bottom">
        <template #content>
            <p><a-button type="text" @click="userSpace">个人中心</a-button></p>
            <a-button type="text" @click="handleLogout">退出登录</a-button>
        </template>
        <a-avatar :size="58" style="background-color: #5ea5f5">
            <template #icon>
                <UserOutlined />
            </template>
        </a-avatar>
    </a-popover>

    <a-modal v-model:open="loginModalOpen" @cancel="closeModal" :title="state" :footer="null" centered width="450px">
        <div v-if="state === '登录账号'" class="login-modal">
            <a-input v-model:value=loginForm.username placeholder="用户名"
                style="width: 80%; margin-top: 7%; margin-bottom: 8%">
                <template #prefix>
                    <UserOutlined />
                </template>
            </a-input>
            <a-input-password v-model:value=loginForm.password placeholder="请输入密码" style="width: 80%; margin-bottom: 8%">
                <template #prefix>
                    <LockOutlined />
                </template>
            </a-input-password>
            <a-button type="primary" style="width: 80%; margin-bottom: 5%" @click="handleLogin">登录</a-button>
            <a-button type="text" style="width: 80%; margin-bottom: 5%" @click="state = '注册账号'">还没有账号？注册账号</a-button>
        </div>

        <div v-else-if="state === '注册账号'" class="login-modal">
            <a-input v-model:value="registerForm.email" placeholder="邮箱" style="width: 80%; margin-top: 7%; margin-bottom: 5%"
                :status="errorStatus.email">
                <template #prefix>
                    <MailOutlined />
                </template>
            </a-input>
            <a-input v-model:value="registerForm.name" placeholder="用户名" style="width: 80%; margin-bottom: 5%">
                <template #prefix>
                    <UserOutlined />
                </template>
            </a-input>
            <a-input-password v-model:value="registerForm.pwd" placeholder="请输入密码" style="width: 80%; margin-bottom: 5%"
                :status="errorStatus.pwd">
                <template #prefix>
                    <LockOutlined />
                </template>
            </a-input-password>
            <a-input-password v-model:value="registerForm.pwd2" placeholder="请再次输入密码" style="width: 80%; margin-bottom: 5%"
                :status="errorStatus.pwd2">
                <template #prefix>
                    <LockOutlined />
                </template>
            </a-input-password>
            <a-button type="primary" style="width: 80%; margin-bottom: 5%" @click="handleRegister">注册</a-button>
            <a-button type="text" style="width: 80%; margin-bottom: 5%" @click="state = '登录账号'">返回登录</a-button>
        </div>
    </a-modal>
</template>

<script>
import { AntDesignOutlined, UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons-vue";
import { inject, ref } from "vue";
import isLogin from "@/store/isLogin";
import {login, logout, register} from "@/api/user";
import { notification } from 'ant-design-vue';
import api from "@/api/api";
import loginModalOpen from "@/store/loginModalOpen";
import router from "@/router";

export default {
    name: "TopAvatar",
    computed: {
        loginModalOpen() {
            return loginModalOpen.value
        },
        isLogin() {
            return isLogin.value;
        }
    },
    components: { AntDesignOutlined, UserOutlined, LockOutlined, MailOutlined },
    setup() {
        const state = ref('登录账号');
        const loginForm = ref({
            username: '',
            password: '',
        });
        const registerForm = ref({
            email: '',
            name: '',
            pwd: '',
            pwd2: '',
        });
        const errorStatus = ref({
            email: '',
            pwd: '',
            pwd2: '',
        });
        const alerts = ref({
            flag: false,
            message: ''
        });
        function onLoginClicked() {
            // console.log("login");
            loginModalOpen.value = true;
            state.value = '登录账号';
        }

        function onRegisterClicked() {
            console.log("register");
            loginModalOpen.value = true;
            state.value = '注册账号';
        }

        function closeModal() {
            loginModalOpen.value = false;
        }

        async function handleLogin() {
            console.log(loginForm.value)
            const res = await login(loginForm.value);
            if (res.code !== 20000) {
                openNotification('error', '登录失败', res.msg)
            } else {
                openNotification('success', '登录成功', "欢迎回来")
                console.log("res ", res)
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('uid', res.data.uid)
                console.log("sessionStorage ",sessionStorage.getItem("uid"))
                isLogin.value = true;
                loginModalOpen.value = false;
                api.defaults.headers.common['Authorization'] = res.data.token;
            }
        }
        async function handleRegister() {
            console.log("registerForm.value ",registerForm.value);
            function validEmail(email) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(email);
            }
            // 判断邮箱有效
            if (validEmail(registerForm.value.email) === false) {
                errorStatus.value.email = 'error';
                console.log('errorStatus.value.email ', errorStatus.value.email);
                alerts.value.flag = true;
                alerts.value.message = '邮箱格式错误';
                openNotification('error', '注册失败', "邮箱格式错误");
                return;
            } else {
                console.log('errorStatus.value.email ', errorStatus.value.email);
                errorStatus.value.email = '';
                alerts.value.flag = false;
            }
            // 判断密码
            if (registerForm.value.pwd.length < 6) {
                errorStatus.value.pwd = 'error';
                alerts.value.flag = true;
                alerts.value.message = '密码长度不得小于6位';
                openNotification('error', '注册失败', "密码长度不得小于6位");
                return;
            } else {
                errorStatus.value.pwd = '';
                alerts.value.flag = false;
            }

            if (registerForm.value.pwd !== registerForm.value.pwd2) {
                errorStatus.value.pwd2 = 'error';
                alerts.value.flag = true;
                alerts.value.message = '两次密码输入不一致';
                openNotification('error', '注册失败', "两次密码输入不一致");
                return;
            } else {
                errorStatus.value.pwd2 = '';
                alerts.value.flag = false;
            }
            console.log("registerForm.value ", registerForm.value);
            const res = await register(registerForm.value);
            console.log('res ', res);
            if (res.code !== 20000) {
                openNotification('error', '注册失败', res.msg);
            } else {
                openNotification('success', '注册成功', "欢迎您的到来");
                state.value = '登录账号';
            }
            
        }
        function userSpace() {
            console.log("userSpace")
            router.push('/user/info')
        }
        async function handleLogout() {
            console.log("logout");
            isLogin.value = false;
            const res = await logout();
            if(res.code === 20000) {
                openNotification('success', '退出成功', "期待您的下次使用");
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("uid");
                api.defaults.headers.common['Authorization'] = '';
            } else {
                openNotification('error', '退出失败', "请稍后再试");
            }
        }

        const openNotification = (type, title, msg) => {
            notification[type]({
                message: title,
                description: msg,
            });
        };

        return {
            handleLogin,
            handleRegister,
            userSpace,
            handleLogout,
            onLoginClicked,
            onRegisterClicked,
            closeModal,
            state, loginForm, registerForm, errorStatus, alerts
        }
    }
}
</script>

<style scoped>
.login-modal {
    text-align: center;
    margin-top: 20px;
}
</style>