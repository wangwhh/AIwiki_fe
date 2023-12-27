import axios from "axios";
import { ref } from "vue";

const api = ref(axios.create({
    baseURL: 'http://localhost:8081',
    //timeout: 1000,
}));

export default api.value;
