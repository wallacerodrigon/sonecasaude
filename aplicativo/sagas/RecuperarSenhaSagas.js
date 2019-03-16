import {
    call,
    put, delay
  } from 'redux-saga/effects';

import { START_RECUPERACAO, END_RECUPERACAO, EMAIL_INVALIDO, EMAIL_INEXISTENTE, ERRO_INESPERADO, INTERNET_INOPERANTE } from "../actions/EsqueciSenhaAction";
import UsuarioServico from "../servicos/UsuarioServico";
import { NETWORK_ERROR, RETORNO_SUCESSO } from "../constants/ConstantesInternas";

export function* recuperarSenha(action){
 //   console.log('recuperando senha pela saga:', UsuarioServico.recuperarSenha);
    yield put({type: START_RECUPERACAO});

    try {
        const retorno = yield call(UsuarioServico.recuperarSenha, action.email);

        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: END_RECUPERACAO});
        } else {
            yield put({type: ERRO_INESPERADO, mensagemFalha: retorno.mensagemErro});
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: ERRO_INESPERADO, mensagemFalha: error});
        }


    }

}

