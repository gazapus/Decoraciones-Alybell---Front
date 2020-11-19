import http from "../utils/http-common";
import authHeader from "./auth-header";

function isAdminOrMod() {
    return http.get("/auth/check", { headers: authHeader() });
};

function isAdmin() {
    return http.get("/auth/check/admin", { headers: authHeader() });
};

export default {
    isAdminOrMod,
    isAdmin
};