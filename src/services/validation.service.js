import http from "../utils/http-common";
import authHeader from "./auth-header";

function isAdminOrMod() {
    return http.get("/validation/admin_or_mod", { headers: authHeader() });
};

function isAdmin() {
    return http.get("/validation/admin", { headers: authHeader() });
};

function isMod() {
    return http.get("/validation/mod", { headers: authHeader() });
};

export default {
    isAdminOrMod,
    isMod,
    isAdmin
};