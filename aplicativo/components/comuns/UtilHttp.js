import axios from "axios";
import URL_BACKEND, { TAG_USUARIO_STORAGE }  from "../../constants/ConstantesInternas";
import { getValoresStorage } from "../comuns/UtilStorage";

const axiosApi = axios.create({
    baseURL: URL_BACKEND,
})

export const setAuthHeader = async () => {
    const dadosUsuario = await getValoresStorage(TAG_USUARIO_STORAGE);
    if (dadosUsuario != null){
        let usuario = JSON.parse( dadosUsuario );
        axiosApi.defaults.headers.common['Authorization'] = `Bearer ${usuario.token}`;
        axiosApi.defaults.headers.common['X-CSRF'] = `${usuario.xsrf}`;

    }
    axiosApi.defaults.headers.post['Content-Type'] = 'application/json';
    axiosApi.defaults.responseEncoding = 'utf-8';
    //axiosApi.timeout=5000;
}

setAuthHeader()

export default axiosApi;