import axios from "axios";
import { URL_BACKEND, tratarTextoCodRetorno } from "../constants/ConstantesInternas";

const URI = "usuario-api/son-rest/usuarios/";

const recuperarSenha = email => {
    return axios.post(`${URL_BACKEND}/${URI}/recuperaSenha`, {"email": email})
                .then( () => {
                    return {result: true} 
                })
                .catch(error => {
                    return {result: false, mensagem: tratarTextoCodRetorno(error)}
                } );

};

const cadastrarUsuario = (usrDto) => {
    return axios.post(`${URL_BACKEND}/${URI}`,JSON.stringify(usrDto))
                .then( () => {
                    return {result: true} 
                })
                .catch(error => {
                    return {result: false, mensagem: tratarTextoCodRetorno(error)}
                } );

}

export default {
    recuperarSenha,
    cadastrarUsuario
}