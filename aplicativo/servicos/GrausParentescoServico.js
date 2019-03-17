import axios from "axios";
import { URL_BACKEND } from "../constants/ConstantesInternas";
import Erro from "../components/comuns/Erro";

const URI = "usuario-api/son-rest/graus-parentesco";

const recuperarGrausParentesco = () => {
    return axios.get(`${URL_BACKEND}/${URI}/parentescosAtivos`)
        .then( result => result.data.retorno )
        .catch(error => Erro.getDetalhesErro(error));

};


export default {
    recuperarGrausParentesco
}