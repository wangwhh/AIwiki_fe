import {ref} from "vue";
const isLogin = ref(false);

if(sessionStorage.getItem("token") != null){
    isLogin.value = true;
}

export default isLogin;