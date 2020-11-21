import http from "../utils/http-common";
import authHeader from "./auth-header";

function getAll() {
    return http.get("/news");
};

function get(id) {
    return http.get(`/news/get/${id}`);
};

function create(data) {
    return http.post("/news/create", data, { headers: authHeader() });
};

function update(id, data) {
    return http.put(`/news/update/${id}`, data, { headers: authHeader() });
};

function remove(id) {
    return http.delete(`/news/delete/${id}`, { headers: authHeader() });
};

function removeAll() {
    return http.delete(`/news/delete`, { headers: authHeader() });
};

let methods = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll
};

export default methods;