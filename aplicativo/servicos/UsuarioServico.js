import axios from "axios";

import axiosApi from "../components/comuns/UtilHttp";
import { URL_BACKEND } from "../constants/ConstantesInternas";
import Erro from "../components/comuns/Erro";

const URI = "usuario-api/son-rest/usuarios";

const recuperarSenha = email => {
    return axiosApi.post(`${URL_BACKEND}${URI}/recuperaSenha`, {"email": email})
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};

const efetuarLogin = action => {
    return axiosApi.post(`${URL_BACKEND}${URI}/efetuarLogin`, {"login": action.user.login, "senha": action.user.senha})
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};


const cadastrarUsuario = (usrDto) => {
    return axiosApi.post(`${URL_BACKEND}${URI}/cadastroInicial`, JSON.stringify(usrDto))
                .then( result => result )
                .catch(error => Erro.getDetalhesErro(error));

}

const existeCadastroComEsteCpf = (numCpf) => {
    return axiosApi.get(`${URL_BACKEND}${URI}/existeUsuarioByCpf?numCpf=${numCpf}`)
                .then( result => result )
                .catch(error => Erro.getDetalhesErro(error));

}

export default {
    recuperarSenha,
    cadastrarUsuario,
    efetuarLogin,
    existeCadastroComEsteCpf
}