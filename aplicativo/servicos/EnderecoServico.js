import axios from "axios";
import { URL_BACKEND, tratarTextoCodRetorno } from "../constants/ConstantesInternas";

const URI = "endereco-api/son-rest/logradouros/";

const buscarCep = numCep => {
    return axios.post(`${URL_BACKEND}/${URI}/recuperaEndereco`, {"numCep": numCep})
                .then( () => {
                    return result
                })
                .catch(error => {
                    return {result: false, mensagem: tratarTextoCodRetorno(error)}
                } );

};

export default {
    buscarCep
}