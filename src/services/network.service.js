import http from "../utils/http-common";
import authHeader from "./auth-header";

function getAll() {
    return http.get("/network");
};

function get(id) {
    return http.get(`/network/get/${id}`);
};

function create(data) {
    return http.post("/network/create", data, { headers: authHeader() });
};

function update(id, data) {
    return http.put(`/network/update/${id}`, data, { headers: authHeader() });
};

function remove(id) {
    return http.delete(`/network/delete/${id}`, { headers: authHeader() });
};

function removeAll() {
    return http.delete(`/network/delete`, { headers: authHeader() });
};

let methods = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll
}

export default methods;