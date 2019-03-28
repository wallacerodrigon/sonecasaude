import axios from "axios";
import URL_BACKEND  from "../../constants/ConstantesInternas";

axios.defaults.baseURL = URL_BACKEND
axios.defaults.headers.common['Authorization'] = 'Bearer ';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.responseEncoding = 'utf-8';