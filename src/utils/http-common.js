import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_SERVER || "http://localhost:8080/api/v1",
    headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Credentials': true
    }
});