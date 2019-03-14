import {
    call,
    put, delay
  } from 'redux-saga/effects';

import { START_RECUPERACAO, END_RECUPERACAO, EMAIL_INVALIDO, EMAIL_INEXISTENTE, ERRO_INESPERADO, INTERNET_INOPERANTE } from "../actions/EsqueciSenhaAction";
import UsuarioServico from "../servicos/UsuarioServico";

export function* recuperarSenha(action){
 //   console.log('recuperando senha pela saga:', UsuarioServico.recuperarSenha);
    yield put({type: START_RECUPERACAO});

    try {
        const retorno = yield call(UsuarioServico.recuperarSenha, action.email);

        if (retorno.result){
            yield put({type: END_RECUPERACAO});
        } else {
            yield put({type: ERRO_INESPERADO, mensagem: retorno.mensagem});
        }
    } catch(error){
        console.log('erro:',error);
        if (error == 'Error: Network Error') {
            yield put({type: INTERNET_INOPERANTE});
        }

        yield put({type: ERRO_INESPERADO, mensagem: error});

    }

}

