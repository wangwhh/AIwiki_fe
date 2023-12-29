import api from "@/api/api";

export async function fetchTools() {
    try {
        const res = await api.get("/getTool");
        if(res.data.code === 20000){
            console.log("res.data.data.tools ",res.data.data.tools)
            return res.data.data.tools;
        } else {
            return [];
        }
    } catch (err) {
        console.error(err);
        return [];
    }
}