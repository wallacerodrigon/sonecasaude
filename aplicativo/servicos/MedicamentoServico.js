import axiosApi from "../components/comuns/UtilHttp";
import { URL_BACKEND } from "../constants/ConstantesInternas";
import Erro from "../components/comuns/Erro";

const URI = "medicamento-api/son-rest/medicamentos";

const listarMedicamentos = (nomeMedicamento, codBarras) => {
    let url = `${URL_BACKEND}${URI}/filtro?nome=${nomeMedicamento}`;

    if (codBarras){
        url +=  `&codBarras=${codBarras}`;
    }

    return axiosApi.get(url)
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};

const listarDetalhesMedicamentos = (codMedicamento) => {
    return axiosApi.get(`${URL_BACKEND}${URI}/detalhe?idMedicamento=${codMedicamento}`)
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};


export default {
    listarDetalhesMedicamentos, 
    listarMedicamentos
}