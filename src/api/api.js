import axios from "axios";
import { ref } from "vue";

const api = ref(axios.create({
    baseURL: 'http://localhost',
    //timeout: 1000,
}));

export default api.value;