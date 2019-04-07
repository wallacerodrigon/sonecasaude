import { URL_BACKEND, tratarTextoCodRetorno } from "../constants/ConstantesInternas";

const URI = "endereco-api/son-rest/logradouros";
import Erro from "../components/comuns/Erro";
import axiosApi from "../components/comuns/UtilHttp";

const buscarCep = numCep => {
    return axiosApi.get(`${URL_BACKEND}${URI}/buscarCep?numCep=${numCep}`)
                .then( result => {
                    return result
                })
                .catch(error => {
                    return Erro.getDetalhesErro(error);
                } );

};

export default {
    buscarCep
}