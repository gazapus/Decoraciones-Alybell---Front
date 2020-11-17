import http from "../utils/http-common";

function register(username, email, password, roles) {
    return http.post("/auth/signup", {
        username,
        email,
        password,
        roles
    });
};

function login(username, password) {
    return http
        .post("/auth/signin", { username, password })
        .then((response) => {
            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};