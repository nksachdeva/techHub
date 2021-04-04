import axios from "axios";

// TODO: Update server api to embed this value
// at runtime, be fetching it from deployment env
const apiUrl = 'https://techhub-dev-app.azurewebsites.net';

export default axios.create({
    // baseURL: `http://localhost:${apiPort}`
    baseURL: apiUrl
});