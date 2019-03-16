import axios from "axios";
import { URL_BACKEND, tratarTextoCodRetorno } from "../constants/ConstantesInternas";

const URI = "endereco-api/son-rest/logradouros";
import Erro from "../components/comuns/Erro";

const buscarCep = numCep => {
    return axios.get(`${URL_BACKEND}/${URI}/buscarCep?numCep=${numCep}`)
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