import { call, put } from 'redux-saga/effects';
import { RECSEN_END_RECUPERACAO, RECSEN_ERRO_INESPERADO, RECSEN_START_RECUPERACAO } from "../actions/EsqueciSenhaAction";
import { MensagemInformativa } from '../components/mensagens/Mensagens';
import { RETORNO_SUCESSO, RETORNO_SERVER_INDISPONIVEL } from "../constants/ConstantesInternas";
import UsuarioServico from "../servicos/UsuarioServico";


export function* recuperarSenha(action){
    yield put({type: RECSEN_START_RECUPERACAO});

    try {
        const retorno = yield call(UsuarioServico.recuperarSenha, action.email);
        console.log('esqueci',retorno.data.retorno);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: RECSEN_END_RECUPERACAO});
            MensagemInformativa("Encaminhamos um e-mail com um link para ativação da sua nova senha!");
        } else {
            yield put({type: RECSEN_ERRO_INESPERADO, mensagemFalha: retorno.mensagemErro});
            if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
                MensagemInformativa(retorno.mensagemErro);
            }
        }
    } catch(error){
        yield put({type: RECSEN_ERRO_INESPERADO, mensagemFalha: error});
    }

}

