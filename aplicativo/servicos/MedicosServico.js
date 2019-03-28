import axiosApi from "../components/comuns/UtilHttp";
import { URL_BACKEND, TAG_USUARIO_STORAGE } from "../constants/ConstantesInternas";
import Erro from "../components/comuns/Erro";
import { getValoresStorage } from "../components/comuns/UtilStorage";

const URI = "medico-api/son-rest/medicos";

const filtrar = (nomeMedico, numCrmUF) => {
    let codUsuario = 1;
    return axiosApi.post(`${URL_BACKEND}/${URI}/filtrar`, {"nomeMedico": nomeMedico, "numCrmUF":numCrmUF, "codUsuario":codUsuario})
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};

const recuperarMedicos = async () => {
    const usuario = await recuperarDadosUsuario();
    console.log('usuario:',usuario);
    return axiosApi.get(`${URL_BACKEND}${URI}/filtrar?codUsuario=${usuario.idUsuario}`)
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};

const recuperarDadosUsuario = async () => {
    const dadosUsuario = await getValoresStorage(TAG_USUARIO_STORAGE);
    let usuario = JSON.parse( dadosUsuario );
    return usuario;
}

export default {
    filtrar,
    recuperarMedicos
}