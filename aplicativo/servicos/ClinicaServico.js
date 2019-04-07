import axiosApi from "../components/comuns/UtilHttp";
import { URL_BACKEND } from "../constants/ConstantesInternas";
import Erro from "../components/comuns/Erro";

const URI = "medico-api/son-rest/clinicas";


const salvarClinica = (clinica)  => {
    return axiosApi.post(`${URL_BACKEND}${URI}`, JSON.stringify(clinica))
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));
}

const alterarClinica = (clinica)  => {
    delete(clinica.dataHoraInclusao);
    return axiosApi.put(`${URL_BACKEND}${URI}`, JSON.stringify(clinica))
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));
}

const vincularClinicaMedico = (codClinica, codMedico)  => {
    return axiosApi.post(`${URL_BACKEND}${URI}/vincularDesvincular`, montarObjetoVinculo(codClinica, codMedico, true) ) 
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));
}

const desvincularClinicaMedico = (codClinica, codMedico)  => {
    return axiosApi.post(`${URL_BACKEND}${URI}/vincularDesvincular`, montarObjetoVinculo(codClinica, codMedico, false) ) 
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));
}

const buscarClinicas = (nome, codMedico)  => {
    return axiosApi.get(`${URL_BACKEND}${URI}/filtrar?nomeClinica=${nome}&codMedico=${codMedico}`) 
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));
}


const montarObjetoVinculo = (codClinica, codMedico, bolVincula)=> {
    return{
        codClinica,
        codMedico,
        situacaoVinculo: bolVincula ? "VINCULA" : "DESVINCULA",
        buscarClinicas
      }    
}

export default {
    salvarClinica, alterarClinica, vincularClinicaMedico, desvincularClinicaMedico,buscarClinicas
}