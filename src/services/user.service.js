import http from "../utils/http-common";
import authHeader from "./auth-header";

function getAll() {
    return http.get("/user/all", { headers: authHeader() });
};

function remove(id) {
    return http.delete(`/user/delete/${id}`, { headers: authHeader() });
};

export default {
    getAll,
    remove
};