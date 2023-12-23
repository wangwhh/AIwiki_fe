import api from "@/api/api";

export async function fetchEntry(id) {
    try {
        const res = await api.get("/entryInfo", {
            params: {
                id: id
            }
        });
        if(res.data.code === 20000){
            return res.data.data.entryInfo;
        } else {
            return null;
        }
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function fetchRelation(id) {
    try {
        const res = await api.get("/relatedEntry", {
            params: {
                id: id
            }
        });
        if(res.data.code === 20000){
            return res.data.data.relation;
        } else {
            return [];
        }
    } catch (err) {
        console.error(err);
        return [];
    }
}
