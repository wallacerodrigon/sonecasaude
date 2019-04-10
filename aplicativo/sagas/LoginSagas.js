import { call, put } from 'redux-saga/effects';
import { LOGIN_FALHA, LOGIN_START, LOGIN_SUCESSO } from '../actions/LoginAction';
import { atualizarValoresNaStorage, limparStorage } from "../components/comuns/UtilStorage";
import { MensagemInformativa } from '../components/mensagens/Mensagens';
import { RETORNO_SUCESSO, TAG_USUARIO_LOGADO, TAG_USUARIO_STORAGE, RETORNO_SERVER_INDISPONIVEL } from '../constants/ConstantesInternas';
import UsuarioServico from '../servicos/UsuarioServico';

export function* efetuarLogin(action){
    yield put({type: LOGIN_START});
    
    try {
        const retorno = yield call(UsuarioServico.efetuarLogin, action);
        if (retorno.status === RETORNO_SUCESSO ){
            //pegar o token e retirar os dados do usuário e depois armazenar no storage...
            atualizarValoresNaStorage(TAG_USUARIO_STORAGE, JSON.stringify(retorno.data.retorno) );
            atualizarValoresNaStorage(TAG_USUARIO_LOGADO, JSON.stringify("true") );
            yield put({type: LOGIN_SUCESSO, user: retorno.data.retorno})
        } else {
            console.log('não logado', retorno.status);
            if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
                MensagemInformativa(retorno.mensagemErro);
            }
            yield put({type: LOGIN_FALHA, mensagemFalha: retorno.mensagemErro });
    }
    
    } catch(error){
        console.log('erro catch', error);
        limparStorage();
        yield put({type: LOGIN_FALHA, mensagemFalha: 'Erro ao efetuar login. \nDetalhes:\n' + error });
    }
}


