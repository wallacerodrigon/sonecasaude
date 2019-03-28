import {
    call,
    put, delay
  } from 'redux-saga/effects';
import { INICIANDO, FINALIZANDO_BUSCA_SUCESSO, FINALIZANDO_BUSCA_FALHA, INTERNET_INOPERANTE } from "../actions/MedicosAction";
import MedicosServico from "../servicos/MedicosServico";
import { NETWORK_ERROR, RETORNO_SUCESSO } from "../constants/ConstantesInternas";
  

export function* recuperarMedicos(action){
    yield put({type: INICIANDO});
    console.log('buscando meus médicos', action);
    try {
        const retorno = yield call(MedicosServico.recuperarMedicos);
        console.log('retorno:', retorno);
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