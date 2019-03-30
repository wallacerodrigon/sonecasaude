import { LOGIN_CHANGE_FIELD, LOGIN_FALHA, LOGIN_START, LOGIN_SUCESSO } from "../actions/LoginAction";
import { alterarState } from "./FuncoesGenericas";

const INITIAL_STATE = {
    login: '', senha: '', mensagemFalha: '', loading: false, bolSucesso: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN_CHANGE_FIELD: {
            let newState = alterarState(state, action.fieldName, action.value);
            newState = {...newState, bolSucesso: false, mensagemFalha: ''}
            return newState;
        }

        case LOGIN_START: {
            return {
                ...state,
                loading: true,
                mensagemFalha: '',
                bolSucesso: false
            }
        }

        case LOGIN_SUCESSO: {
            return {...INITIAL_STATE, bolSucesso: true, dadosUsuario: action.user};
        }

        case LOGIN_FALHA: {
            return {...state, loading: false, bolSucesso: false, mensagemFalha: action.mensagemFalha};
        }

        default: {
            return state;
        }
    }
}

