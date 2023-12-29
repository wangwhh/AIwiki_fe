<template>
    <a-card class="login-card" title="管理员登录" >
        <a-input v-model:value="loginForm.name" placeholder="用户名" style="width: 80%; margin-top: 7%; margin-bottom: 8%">
            <template #prefix>
                <user-outlined />
            </template>
        </a-input>
        <a-input type="password" v-model:value="loginForm.pwd" placeholder="请输入密码" style="width: 80%; margin-bottom: 8%">
            <template #prefix>
                <lock-outlined />
            </template>
        </a-input>
        <a-button type="primary" style="width: 80%; margin-bottom: 5%" @click="handleLogin">登录</a-button>
    </a-card>
</template>

<script>

import router from "@/router";
import api from "@/api/api";
import md5 from 'js-md5';
import {ref} from "vue";
import {LockOutlined, UserOutlined} from "@ant-design/icons-vue";
import openNotification from "@/components/notification";

export default {
    components: {UserOutlined, LockOutlined},
    setup() {
        const loginForm= ref({
            name: '',
            pwd: '',
        });
        function handleLogin() {
            api.post('/adminLogin', {
                username: loginForm.value.name,
                password: loginForm.value.pwd,
            }).then(res => {
                // console.log(res);
                if (res.data.code === 20000) {
                    openNotification('success', '登录成功', '欢迎回来')
                    sessionStorage.setItem('token', res.data.data.token);
                    api.defaults.headers.common['Authorization'] = res.data.data.token;
                    router.push('/topics');
                } else {
                    openNotification('error', '登录失败', res.data.msg)
                }
            }).catch(err => {
                console.log(err);
            })

        }

        return {
            loginForm, handleLogin
        }
    },
};
</script>


<style scoped>
.login-card {
    position: relative;
    top: 20%;
    margin: auto;
    width: 450px;
    text-align: center;
    box-shadow: 6px 0px 20px rgba(34, 87, 188, 0.1);
    border-radius: 15px;
    background: #F6FAFFFF;
    padding: 20px 10px;
}
</style>