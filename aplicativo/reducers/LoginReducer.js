import { LOGIN_SUCESSO, LOGIN_FALHA, CHANGE_FIELD, EFETUAR_LOGOUT, LOGIN_START } from "../actions/LoginAction";
import { alterarState } from "./FuncoesGenericas";

const INITIAL_STATE = {
    login: '', senha: '', mensagemFalha: '', loading: false, bolSucesso: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_FIELD: {
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

        case EFETUAR_LOGOUT: {
            return INITIAL_STATE;
        }

        default: {
            return state;
        }
    }
}

