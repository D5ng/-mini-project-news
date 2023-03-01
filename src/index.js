import App from "./app.js";
import { API_KEY } from "./api/api.js";
import API from "./api/index.js";

const api = new API(API_KEY);

new App(document.getElementById("App"), { api })