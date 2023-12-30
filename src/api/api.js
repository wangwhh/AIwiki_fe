import axios from "axios";
import { ref } from "vue";

const api = ref(axios.create({
    baseURL: 'http://localhost:8081',
    //timeout: 1000,
}));

if(sessionStorage.getItem("token")) {
    api.value.defaults.headers.common['Authorization'] = sessionStorage.getItem("token");
}

export default api.value;
