import {
    call,
    put, delay
  } from 'redux-saga/effects';
import { INICIANDO, FINALIZANDO_BUSCA_SUCESSO, FINALIZANDO_BUSCA_FALHA, INTERNET_INOPERANTE, FINALIZANDO_DESVINCULO } from "../actions/MedicosAction";
import MedicosServico from "../servicos/MedicosServico";
import { NETWORK_ERROR, RETORNO_SUCESSO } from "../constants/ConstantesInternas";
import { getValoresStorage, atualizarValoresNaStorage } from "../components/comuns/UtilStorage";  

export function* recuperarMedicos(action){
    yield put({type: INICIANDO});
    try {
        const retorno = yield call(MedicosServico.recuperarMedicos);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: FINALIZANDO_BUSCA_SUCESSO,  listaMedicos: retorno.data.retorno});
        } else {
            yield put({type: FINALIZANDO_BUSCA_FALHA, mensagemFalha: retorno.mensagemErro});
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: FINALIZANDO_BUSCA_FALHA, mensagemFalha: error});
        }


    }
}

export function* desvincularMedico(action){
    yield put({type: INICIANDO});
    try {
        const retorno = yield call(MedicosServico.desvincularMedico, action.medico);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: FINALIZANDO_DESVINCULO, idMedico: action.medico.idMedico});
        } else {
            yield put({type: FINALIZANDO_DESVINCULO, mensagemFalha: retorno.mensagemErro, idMedico: null});
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: FINALIZANDO_DESVINCULO, mensagemFalha: error});
        }


    }
}
