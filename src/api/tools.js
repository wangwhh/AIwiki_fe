import api from "@/api/api";

export async function fetchTools() {
    try {
        const res = await api.get("/getTool");
        if(res.data.code === 20000){
            return res.data.data.tools;
        } else {
            return [];
        }
    } catch (err) {
        console.error(err);
        return [];
    }
}