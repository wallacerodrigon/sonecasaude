import axios from "axios";
import URL_BACKEND, { TAG_USUARIO_STORAGE, CONTENT_TYPE }  from "../../constants/ConstantesInternas";
import { getValoresStorage } from "../comuns/UtilStorage";
import { NetInfo } from "react-native";

const axiosApi = axios.create({
    baseURL: URL_BACKEND,
})

export const temInternet = () => {
  
    return true;
}

//criar um interceptor para tratar os erros, colocar o header e verificar internet
axiosApi.interceptors.request.use(
    async (config) => {
            
        // if (this.temInternet()){
            const dadosUsuario = await getValoresStorage(TAG_USUARIO_STORAGE);
            if (dadosUsuario != null){
                let usuario = JSON.parse( dadosUsuario );
                axiosApi.defaults.headers.common['Authorization'] = `Bearer ${usuario.token}`;
                axiosApi.defaults.headers.common['X-CSRF'] = `${usuario.xsrf}`;
        
            }
            axiosApi.defaults.headers.post['Content-Type'] = CONTENT_TYPE;
            axiosApi.defaults.headers.put['Content-Type'] = CONTENT_TYPE;
            axiosApi.defaults.responseEncoding = 'utf-8';
           // axiosApi.timeout= 3000;
            axiosApi.baseURL = URL_BACKEND;
        
            return config;
//        } else {
    },
    
    (error) => {
        console.log('ERRO de interceptando a requisição');
        return Promise.reject(error);
    }
);
//tratar erro de internet falha, site do sistema fora do ar (404) e erros dos links
axiosApi.interceptors.request.use(
    (config) => {
      //tratar quando der 404 e quando o serviço estiver indisponível: ver o código
        //console.log('response ok')
        return config;
    },
    (error)=> {
        //console.log('response error', error);
        return Promise.reject(error);
    }  
);

export default axiosApi;


/*NetInfo.getConnectionInfo().then((connectionInfo) => {
  console.log(
    'Initial, type: ' +
      connectionInfo.type +
      ', effectiveType: ' +
      connectionInfo.effectiveType,
  );
});
function handleFirstConnectivityChange(connectionInfo) {
  console.log(
    'First change, type: ' +
      connectionInfo.type +
      ', effectiveType: ' +
      connectionInfo.effectiveType,
  );
  NetInfo.removeEventListener(
    'connectionChange',
    handleFirstConnectivityChange,
  );
}
NetInfo.addEventListener('connectionChange', handleFirstConnectivityChange);*/