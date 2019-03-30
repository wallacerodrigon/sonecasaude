import { call, put } from 'redux-saga/effects';

import { BUSMED_INICIANDO, BUSMED_CONSULTA_FALHA, BUSMED_CONSULTA_SUCESSO } from "../../actions/medicos/ProcuraMedicosAction";
import { NETWORK_ERROR, RETORNO_SUCESSO, INTERNET_INOPERANTE } from "../../constants/ConstantesInternas";

import MedicosServico from "../../servicos/MedicosServico";

export function* filtrarMedicos(action){
    console.log('filtrar medicos')
    yield put({type: BUSMED_INICIANDO});
    try {
        const retorno = yield call(MedicosServico.filtrarMedicos, action.nomeMedico, action.numCrm);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: BUSMED_CONSULTA_SUCESSO,  listaMedicos: retorno.data.retorno});
        } else {
            yield put({type: BUSMED_CONSULTA_FALHA, mensagemFalha: retorno.mensagemErro});
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: BUSMED_CONSULTA_FALHA, mensagemFalha: error});
        }


    }
}

