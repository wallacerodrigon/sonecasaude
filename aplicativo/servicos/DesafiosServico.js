import axios from "axios";
import { URL_BACKEND } from "../constants/ConstantesInternas";
import Erro from "../components/comuns/Erro";

const URI = "usuario-api/son-rest/desafios";

const recuperarDesafios = () => {
    return axios.get(`${URL_BACKEND}/${URI}/desafiosAtivos`)
        .then( result => result.data.retorno )
        .catch(error => Erro.getDetalhesErro(error));

};


export default {
    recuperarDesafios
}