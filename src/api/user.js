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

export async function register(loginForm) {
    try {
        console.log("loginForm ",loginForm)
        const res = await api.post("/user/register", {
            username: loginForm.name,
            password: loginForm.pwd,
            email: loginForm.email
        });
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function logout() {
    try {
        const res = await api.post("/user/logout");
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

