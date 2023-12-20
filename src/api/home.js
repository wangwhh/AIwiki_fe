import api from "./api";

export async function fetchTopics() {
    try {
        const res = await api.get("/topics");
        if(res.data.code === 20000){
            return res.data.data;
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
        if(res.data.code === 20000){
            return res.data.data;
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
            return res.data.data;
        } else {
            return [];
        }
    } catch (err) {
        console.error(err);
        return []; // 发生错误时返回空数组
    }
}

