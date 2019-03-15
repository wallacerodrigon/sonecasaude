import {
    call,
    put, delay
  } from 'redux-saga/effects';

import { START_CADASTRO, END_CADASTRO, ERRO_CADASTRO, INTERNET_INOPERANTE } from "../actions/CadastroAction";

import UsuarioServico from "../servicos/UsuarioServico";

export function* salvarCadastro(action){
    console.log('recuperando senha pela saga:', action);
    // yield put({type: START_CADASTRO});

    // try {
    //     const retorno = yield call(UsuarioServico.recuperarSenha, action.email);

    //     if (retorno.result){
    //         yield put({type: END_CADASTRO});
    //     } else {
    //         yield put({type: ERRO_CADASTRO, mensagem: retorno.mensagem});
    //     }
    // } catch(error){
    //     console.log('erro:',error);
    //     if (error == 'Error: Network Error') {
    //         yield put({type: INTERNET_INOPERANTE});
    //     }

    //     yield put({type: ERRO_CADASTRO, mensagem: error});

    // }

}

