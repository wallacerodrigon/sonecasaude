import {
    call, put, delay
  } from 'redux-saga/effects';
import UsuarioServico from '../servicos/UsuarioServico';
import { LOGIN_SUCESSO, LOGIN_FALHA, LOGIN_START } from '../actions/LoginAction';
import { NETWORK_ERROR, RETORNO_SUCESSO, TAG_USUARIO_STORAGE } from '../constants/ConstantesInternas';
import { INTERNET_INOPERANTE } from '../actions/CadastroAction';
import { atualizarValoresNaStorage } from "../components/comuns/UtilStorage";

export function* efetuarLogin(action){
    yield put({type: LOGIN_START});
    
    try {
        const result = yield call(UsuarioServico.efetuarLogin, action);
        if (result.status === RETORNO_SUCESSO ){
            atualizarValoresNaStorage(TAG_USUARIO_STORAGE, JSON.stringify(result.data.retorno) );
            yield put({type: LOGIN_SUCESSO, user: result.data.retorno})
        } else {
            yield put({type: LOGIN_FALHA, mensagemFalha: result.mensagemErro });
        }
    
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        }
        else {
            yield put({type: LOGIN_FALHA, mensagemFalha: 'Erro ao efetuar login. \nDetalhes:\n' + error });
        }  
    }
}


