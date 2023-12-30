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

export async function register(registerForm) {
    try {
        // console.log("registerForm ",registerForm)
        const res = await api.post("/user/register", {
            username: registerForm.name,
            password: registerForm.pwd,
            email: registerForm.email
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

export async function fetchUserInfo() {
    try {
        const res = await api.get("/user/getInfo");
        if(res.data.code === 20000) {
            return res.data.data;
        } else {
            return null;
        }
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function modifyUserInfo(data) {
    try {
        console.log(data);
        const res = await api.post("/user/modifyInfo", data);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}
