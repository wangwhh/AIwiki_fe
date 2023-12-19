<template>
    <a-popover v-if="!isLogin" placement="bottom">
        <template #content>
            <p><a-button type="text" @click="onLoginClicked">登录账号</a-button></p>
            <a-button type="text" @click="onRegisterClicked">注册账号</a-button>
        </template>
        <a-avatar :size="58">
            <template #icon>
                <AntDesignOutlined />
            </template>
        </a-avatar>
    </a-popover>

    <a-popover v-else placement="bottom">
        <template #content>
            <p><a-button type="text" @click="userSpace">个人中心</a-button></p>
            <a-button type="text" @click="handleLogout">退出登录</a-button>
        </template>
        <a-avatar :size="58">
            <template #icon>
                <AntDesignOutlined />
            </template>
        </a-avatar>
    </a-popover>

    <a-modal v-model:open="modalOpen" :title="state"
             :footer="null"
             centered
             width="450px"
    >
        <div v-if="state === '登录账号'" class="login-modal">
            <a-input v-model="loginForm.name" placeholder="用户名" style="width: 80%; margin-top: 7%; margin-bottom: 8%">
                <template #prefix>
                    <UserOutlined />
                </template>
            </a-input>
            <a-input-password v-model="loginForm.pwd" placeholder="请输入密码" style="width: 80%; margin-bottom: 8%">
                <template #prefix>
                    <LockOutlined />
                </template>
            </a-input-password>
            <a-checkbox style="width: 80%; margin-bottom: 8%"> 记住密码 </a-checkbox>
            <a-button type="primary" style="width: 80%; margin-bottom: 5%" @click="handleLogin">登录</a-button>
            <a-button type="text" style="width: 80%; margin-bottom: 5%" @click="state='注册账号'">还没有账号？注册账号</a-button>
        </div>

        <div v-else-if="state === '注册账号'" class="login-modal">
            <a-input v-model="registerForm.email" placeholder="邮箱" style="width: 80%; margin-top: 7%; margin-bottom: 5%" :status="errorStatus.email">
                <template #prefix>
                    <MailOutlined />
                </template>
            </a-input>
            <a-input v-model="registerForm.name" placeholder="用户名" style="width: 80%; margin-bottom: 5%" >
                <template #prefix>
                    <UserOutlined />
                </template>
            </a-input>
            <a-input-password v-model="registerForm.pwd" placeholder="请输入密码" style="width: 80%; margin-bottom: 5%" :status="errorStatus.pwd">
                <template #prefix>
                    <LockOutlined />
                </template>
            </a-input-password>
            <a-input-password v-model="registerForm.pwd2" placeholder="请再次输入密码" style="width: 80%; margin-bottom: 5%" :status="errorStatus.pwd2">
                <template #prefix>
                    <LockOutlined />
                </template>
            </a-input-password>
            <a-button type="primary" style="width: 80%; margin-bottom: 5%" @click="handleRegister">注册</a-button>
            <a-button type="text" style="width: 80%; margin-bottom: 5%" @click="state='登录账号'">返回登录</a-button>
            <a-alert v-if="this.alerts.flag" type="error" style="width: 80%; margin: auto">{{alerts.message}}</a-alert>
        </div>
  </a-modal>
</template>

<script>
import {AntDesignOutlined, UserOutlined, LockOutlined, MailOutlined} from "@ant-design/icons-vue";
import {inject, ref} from "vue";
import isLogin from "@/store/isLogin";
export default {
    name: "TopAvatar",
    computed: {
        isLogin() {
            return isLogin.value;
        }
    },
    components: {AntDesignOutlined, UserOutlined, LockOutlined, MailOutlined},
    setup() {
        const modalOpen=ref(false);
        const state= ref('登录账号');
        const loginForm= ref({
            name: '',
            pwd: '',
        });
        const registerForm= ref({
            email: '',
            name: '',
            pwd: '',
            pwd2: '',
        });
        const errorStatus= ref({
            email: '',
            pwd: '',
            pwd2: '',
        });
        const alerts= ref({
            flag: false,
            message: ''
        });
        function onLoginClicked() {
            // console.log("login");
            modalOpen.value = true;
            state.value = '登录账号';
        }

        function onRegisterClicked() {
            console.log("register");
            modalOpen.value = true;
            state.value = '注册账号';
        }

        function handleLogin() {
            console.log("login");
            console.log(loginForm.value)
            //api.login(loginForm.value)
            isLogin.value = true;
            modalOpen.value = false;
        }
        function handleRegister() {
            console.log("register");
            console.log(registerForm.value)
            function validEmail(email) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(email);
            }
            // 判断邮箱有效
            if(validEmail(registerForm.value.email) === false) {
                errorStatus.value.email = 'error';
                alerts.value.flag = true;
                alerts.value.message = '邮箱格式错误';
                return;
            } else {
                errorStatus.value.email = '';
                alerts.value.flag = false;
            }
            // 判断密码
            if(registerForm.value.pwd.length <= 6) {
                errorStatus.value.pwd = 'error';
                alerts.value.flag = true;
                alerts.value.message = '密码长度不得小于6位';
                return;
            } else {
                errorStatus.value.pwd = '';
                alerts.value.flag = false;
            }

            if(registerForm.value.pwd !== registerForm.value.pwd2) {
                errorStatus.value.pwd2 = 'error';
                alerts.value.flag = true;
                alerts.value.message = '两次密码输入不一致';
                return;
            } else {
                errorStatus.value.pwd2 = '';
                alerts.value.flag = false;
            }

            // api.register(registerForm.value)
            state.value = '登录账号';
        }
        function userSpace() {
            console.log("userSpace");

        }
        function handleLogout() {
            console.log("logout");
            isLogin.value = false;
            // TODO: 清 session
        }
        return {
            handleLogin,
            handleRegister,
            userSpace,
            handleLogout,
            onLoginClicked,
            onRegisterClicked,
            state, loginForm, registerForm, errorStatus, alerts, modalOpen
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