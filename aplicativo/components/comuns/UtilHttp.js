import axios from "axios";
import URL_BACKEND, { TAG_USUARIO_STORAGE, CONTENT_TYPE, RETORNO_SERVER_INDISPONIVEL }  from "../../constants/ConstantesInternas";
import { getValoresStorage } from "../comuns/UtilStorage";
import { NetInfo } from "react-native";
import { MensagemErro } from "../mensagens/Mensagens";

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
            axiosApi.baseURL = URL_BACKEND;
        
            return config;
//        } else {
    },
    
    async (error) => {
        console.log('ERRO interceptando a requisição', error);
        return Promise.reject(error);
    }
);
//tratar erro de internet falha, site do sistema fora do ar (404) e erros dos links
axiosApi.interceptors.response.use(
    async (config) => {
      return config;
    },
    async (error)=> {
        let mensagem = new String(error);
        if (mensagem.indexOf(RETORNO_SERVER_INDISPONIVEL) > -1){
          MensagemErro('O servidor está inoperante neste momento para esta operação! \nEntre em contato com a administração do Soneca: contato@soneca.com.br e informe os detalhes!');
          return Promise.reject();
        }
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