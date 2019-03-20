import axios from "axios";
import { URL_BACKEND } from "../constants/ConstantesInternas";
import Erro from "../components/comuns/Erro";

const URI = "usuario-api/son-rest/usuarios";

const recuperarSenha = email => {
    return axios.post(`${URL_BACKEND}/${URI}/recuperaSenha`, {"email": email})
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};

const efetuarLogin = user => {
    console.log('login: ', user);
    return axios.post(`${URL_BACKEND}/${URI}/efetuarLogin`, {"login": user.login, "senha": user.senha})
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};


const cadastrarUsuario = (usrDto) => {
    return axios.post(`${URL_BACKEND}/${URI}/cadastroInicial`, JSON.stringify(usrDto))
                .then( result => result )
                .catch(error => Erro.getDetalhesErro(error));

}

export default {
    recuperarSenha,
    cadastrarUsuario,
    efetuarLogin
}