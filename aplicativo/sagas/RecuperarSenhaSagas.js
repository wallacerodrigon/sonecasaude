import {
    call,
    put
  } from 'redux-saga/effects';

import { RECSEN_START_RECUPERACAO, RECSEN_END_RECUPERACAO, RECSEN_ERRO_INESPERADO } from "../actions/EsqueciSenhaAction";
import UsuarioServico from "../servicos/UsuarioServico";
import { NETWORK_ERROR, RETORNO_SUCESSO } from "../constants/ConstantesInternas";

export function* recuperarSenha(action){
    yield put({type: RECSEN_START_RECUPERACAO});

    try {
        const retorno = yield call(UsuarioServico.recuperarSenha, action.email);

        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: RECSEN_END_RECUPERACAO});
        } else {
            yield put({type: RECSEN_ERRO_INESPERADO, mensagemFalha: retorno.mensagemErro});
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: RECSEN_ERRO_INESPERADO, mensagemFalha: error});
        }


    }

}

