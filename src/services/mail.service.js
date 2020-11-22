import http from "../utils/http-common";

function sendMail(data) {
    return http.post(`/mail/send`, data);
};

let methods = {
    sendMail
}

export default methods;