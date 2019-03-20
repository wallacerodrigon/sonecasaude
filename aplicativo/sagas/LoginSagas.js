import {
    call, put, delay
  } from 'redux-saga/effects';
import UsuarioServico from '../servicos/UsuarioServico';
import { LOGIN_SUCESSO, LOGIN_FALHA, LOGIN_START } from '../actions/LoginAction';
import { NETWORK_ERROR } from '../constants/ConstantesInternas';
import { INTERNET_INOPERANTE } from '../actions/CadastroAction';

export function* efetuarLogin(action){
    //  console.log(action.user);
    yield put({type: LOGIN_START});
    
    try {
        const result = yield call(UsuarioServico.efetuarLogin, action);
        console.log('status cadastro:', result.status);
        if (result.status === RETORNO_SUCESSO ){
            //gravar na storage...
            //console.log: 
            console.log(result);
            yield put({type: LOGIN_SUCESSO})
        } else {
            yield put({type: LOGIN_FALHA, mensagemFalha: result.mensagemErro });
        }
    
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        }
        else {
            yield put({type: LOGIN_FALHA, mensagemFalha: error || 'Erro genérico, sem detalhes. Favor comunicar à Soneca Saúde!' });
        }  
    }



}

// const atualizarValoresNaStorage = async (key, valores) => {
//     try {
//         await AsyncStorage.setItem(key, valores);
//     } catch (error) {
//         console.log(error)
//     }
// }

// const getValoresStorage = async (key) => {
//     try {
//         return await AsyncStorage.getItem(key);
//     } catch (error) {
//         console.log(error)
//     }
// }