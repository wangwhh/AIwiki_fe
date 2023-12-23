import api from "@/api/api";

export async function login(loginForm) {
    try {
        console.log(loginForm)
        const res = await api.post("/user/login", {
            username: loginForm.username,
            password: loginForm.password
        });
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

