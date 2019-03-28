import { INICIANDO, FINALIZANDO_BUSCA_SUCESSO, FINALIZANDO_BUSCA_FALHA, SALVAR_MEDICOS, CHANGE_FIELD, EXCLUIR_MEDICO } from "../actions/MedicosAction";

const INITIAL_STATE = {
    mensagemFalha: '', loading: false, bolSucesso: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_FIELD: {
            let newState = alterarState(state, action.fieldName, action.value);
            newState = {...newState, bolSucesso: false, mensagemFalha: ''}
            return newState;
        }

        case INICIANDO: {
            return {
                ...state,
                loading: true,
                mensagemFalha: '',
                bolSucesso: false
            }
        }

        case FINALIZANDO_BUSCA_SUCESSO: {
            return {...INITIAL_STATE, bolSucesso: true, listaMedicos: action.listaMedicos};
        }

        case FINALIZANDO_BUSCA_FALHA: {
            return {...state, loading: false, bolSucesso: false, mensagemFalha: action.mensagemFalha};
        }

        case SALVAR_MEDICOS: {
            return INITIAL_STATE;
        }

        case EXCLUIR_MEDICO: {
            return INITIAL_STATE;
        }


        default: {
            return state;
        }
    }
}