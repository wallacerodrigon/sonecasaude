import axiosApi from "../components/comuns/UtilHttp";
import { URL_BACKEND, TAG_USUARIO_STORAGE } from "../constants/ConstantesInternas";
import Erro from "../components/comuns/Erro";
import { getValoresStorage } from "../components/comuns/UtilStorage";

const URI = "medico-api/son-rest/medicos";

const filtrarMedicos = async (nomeMedico, numCrmUF) => {
    const usuario = await recuperarDadosUsuario();
    return axiosApi.get(`${URL_BACKEND}${URI}/filtrar?nomeMedico=${nomeMedico}&numCrmUF=${numCrmUF}&codUsuario=${usuario.idUsuario}`)
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};

const recuperarMedicos = async () => {
    const usuario = await recuperarDadosUsuario();

    console.log('token:', usuario.token)

    return axiosApi.get(`${URL_BACKEND}${URI}/filtrar?codUsuario=${usuario.idUsuario}`)
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};

const desvincularMedico = async (medico) => {
    const usuario = await recuperarDadosUsuario();
    let obj = {
        codUsuario: usuario.idUsuario,
        codMedico: medico.idMedico
    };
    return axiosApi.post(`${URL_BACKEND}${URI}/desvincularMedico`, JSON.stringify(obj))
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};

const vincularMedico = async (medico) => {
    const usuario = await recuperarDadosUsuario();
    let obj = {
        codUsuario: usuario.idUsuario,
        codMedico: medico.idMedico,
        mobile: true
    };
    return axiosApi.post(`${URL_BACKEND}${URI}/vincularMedico`, JSON.stringify(obj))
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};

const recuperarDadosUsuario = async () => {
    const dadosUsuario = await getValoresStorage(TAG_USUARIO_STORAGE);
    let usuario = JSON.parse( dadosUsuario );
    return usuario;
}

export default {
    filtrarMedicos,
    recuperarMedicos,
    desvincularMedico,
    vincularMedico
}