import api from "@/api/api";

export async function search(key) {
    const res = await api.get('/search', {
        params: {
            keyword: key
        }
    })
    return res.data;
}