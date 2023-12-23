import api from "@/api/api";

export async function fetchEntries() {
    try {
        const res = await api.get("/entry");
        if(res.data.code === 20000){
            return res.data.data.entries;
        } else {
            return [];
        }
    } catch (err) {
        console.error(err);
        return [];
    }
}