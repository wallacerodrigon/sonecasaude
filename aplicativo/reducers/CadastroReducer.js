import { 
    CHANGE_FIELD
} from "../actions/CadastroAction";

import { alterarState } from "./FuncoesGenericas";

const INITIAL_STATE = {nome: ''}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_FIELD: {
            return alterarState(state, action.fieldName, action.value);
        }

        default: {
            return state;
        }
    }

}

