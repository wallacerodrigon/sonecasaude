import axios from "axios";

//import * as http from "../components/comuns/UtilHttp";
import { URL_BACKEND } from "../constants/ConstantesInternas";
import Erro from "../components/comuns/Erro";

const URI = "medico-api/son-rest/medicos";

const filtrar = (nomeMedico, numCrmUF) => {
    let codUsuario = 1;
    return axios.post(`${URL_BACKEND}/${URI}/filtrar`, {"nomeMedico": nomeMedico, "numCrmUF":numCrmUF, "codUsuario":codUsuario})
        .then( result => result )
        .catch(error => Erro.getDetalhesErro(error));

};

export default {
    filtrar
}