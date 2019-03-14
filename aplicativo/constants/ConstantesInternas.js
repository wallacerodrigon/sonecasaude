import axios from "axios";

export const PERFIL_PACIENTE = 'P';
export const PERFIL_CUIDADOR = 'C';

export const URL_BACKEND = "http://192.168.0.11:8080";
export const URL_BACKEND_PRD = "http://sonecasaude.com.br";

// export const AXIOS_CONFIG = axios.create({
//     baseURL: URL_BACKEND,
//     responseType: 'json',
//     responseEncoding: 'utf-8',
//     //timeout: 3000,
//     headers: {'Content-Type': 'application/json'}
//   });
axios.defaults.baseURL = URL_BACKEND
axios.defaults.headers.common['Authorization'] = 'Bearer ';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.responseEncoding = 'utf-8';


export const tratarTextoCodRetorno = retorno => {
    console.log('retorno:', retorno.status);
    switch(retorno.status){
        case 400: {return "Dados informados estão inválidos ou incompletos";} //colocar numa constante
        case 403: {return "Você não tem acesso a este recurso"; }//colocar numa constante
        case 500: {return "Ocorreu um erro interno. Detalhe: " + retorno.statusText;}
        default: {
            return "Erro genérico sem detalhes";
        }
    }    
}
