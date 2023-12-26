import axios from "axios";
import { ref } from "vue";

const api = ref(axios.create({
    baseURL: 'http://10.192.90.175:8081',
    //timeout: 1000,
}));

// const api = ref(axios.create({
//     baseURL: 'http://10.181.252.40:8081',
//     //timeout: 1000,
// }));

export default api.value;