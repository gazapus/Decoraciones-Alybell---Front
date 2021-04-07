import axios from "axios";

const hostURL = process.env.REACT_APP_SERVER || "https://decoracionesaly.herokuapp.com/api/v1" ||"http://localhost:8080/api/v1";

export default axios.create({
    baseURL: hostURL,
    headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin' : '*'
    }
});