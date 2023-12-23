import api from "@/api/api";

export async function postEdit(entry) {
    try {
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
        const res = await api.post("/addEntry", entry);
        console.log(res.data.data)
        return res.data.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}