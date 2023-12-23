import api from "./api";

export async function fetchTopics() {
    try {
        const res = await api.get("/topics");
        if(res.data.code === 20000){
            return res.data.data.topics;
        } else {
            return [];
        }
    } catch (err) {
        console.error(err);
        return []; // 发生错误时返回空数组
    }
}

export async function fetchRecTools() {
    try {
        const res = await api.get("/recommendTool");
        console.log(res.data.data)
        if(res.data.code === 20000){
            return res.data.data.tools;
        } else {
            return [];
        }
    } catch (err) {
        console.error(err);
        return []; // 发生错误时返回空数组
    }
}


export async function fetchGoodEntry() {
    try {
        const res = await api.get("/goodEntry");
        if(res.data.code === 20000){
            return res.data.data.goodEntries;
        } else {
            return [];
        }
    } catch (err) {
        console.error(err);
        return []; // 发生错误时返回空数组
    }
}

