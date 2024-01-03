import api from "@/api/api";

export async function postEdit(entry) {
    try {
        let param = {
            eid: entry.value.id,
            content: entry.value.text
        }
        console.log("param ", param)
        const res = await api.post("/modifyEntry", param);
        return res.data;

    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function addEntry(entry) {
    try {
        let param ={
            id: entry.value.id,
            text: entry.value.text
        }
        console.log("param ", param)
        const res = await api.post("/addEntry", param);
        return res.data;
    } catch (err) {
        console.error(err);
        console.log("error")
        return null;
    }
}