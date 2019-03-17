import { EFETUAR_LOGIN, EFETUAR_LOGOUT, VALIDAR, CHANGE_FIELD } from "../actions/LoginAction";
import axios  from "axios";
import { alterarState } from "./FuncoesGenericas";

const INITIAL_STATE = {
    login: '', senha: '', validos: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_FIELD: {
            return alterarState(state, action.fieldName, action.value);
        }

        case EFETUAR_LOGIN: {
            return state;
        }

        case EFETUAR_LOGOUT: {
            return null;
        }

        default: {
            return state;
        }
    }
}

