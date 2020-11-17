import http from "../utils/http-common";
import authHeader from "./auth-header";

function getAll() {
    return http.get("/product");
};

function get(id) {
    return http.get(`/product/get/${id}`);
};

function create(data) {
    return http.post("/product/create", data, { headers: authHeader() });
};

function update(id, data) {
    return http.put(`/product/update/${id}`, data, { headers: authHeader() });
};

function remove(id) {
    return http.delete(`/product/delete/${id}`, { headers: authHeader() });
};

function removeAll() {
    return http.delete(`/product/delete`, { headers: authHeader() });
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll
};