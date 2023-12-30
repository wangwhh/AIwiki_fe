import api from "@/api/api";

export async function postEdit(entry) {
    try {
        let param ={
            id: entry.value.id,
            text: entry.value.text
        }
        console.log("param ", param)
        const res = await api.post("/modifyEntry", entry);
        console.log(res.data.data)
        return res.data.data;

    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function addEntry(entry) {
    try {
        console.log("entry ", entry)
        let param ={
            id: entry.value.id,
            text: entry.value.text
        }
        console.log("param ", param)
        const res = await api.post("/addEntry", param);
        console.log(res.data.data)
        return res.data.data;
    } catch (err) {
        console.error(err);
        console.log("error")
        return null;
    }
}