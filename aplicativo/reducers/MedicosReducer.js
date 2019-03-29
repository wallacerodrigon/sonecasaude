import { INICIANDO, FINALIZANDO_BUSCA_SUCESSO, FINALIZANDO_BUSCA_FALHA, SALVAR_MEDICOS, CHANGE_FIELD, EXCLUIR_MEDICO, FINALIZANDO_DESVINCULO } from "../actions/MedicosAction";
import { alterarState } from "./FuncoesGenericas";

const INITIAL_STATE = {
    medico: {},
    mensagemFalha: '', loading: false, bolSucesso: false, listaMedicos: [], bolExecutado: false, bolDesvinculo: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_FIELD: {
            let newState = alterarState(state, action.fieldName, action.value);
            newState = {...newState, bolSucesso: false, mensagemFalha: '', bolExecutado: false}
            return newState;
        }

        case INICIANDO: {
            return {
                ...state,
                loading: true,
                bolExecutado: false,
                mensagemFalha: '',
                bolSucesso: false
            }
        }

        case FINALIZANDO_BUSCA_SUCESSO: {
            return {...INITIAL_STATE, bolSucesso: true, listaMedicos: action.listaMedicos, bolExecutado:true, bolDesvinculo: false};
        }

        case FINALIZANDO_BUSCA_FALHA: {
            return {...state, loading: false, bolSucesso: false, mensagemFalha: action.mensagemFalha, bolExecutado:true};
        }

        case SALVAR_MEDICOS: {
            return INITIAL_STATE;
        }

        case FINALIZANDO_DESVINCULO: {
            let newState = {...state};
            if (action.idMedico){
                let novaListaMedicos = state.listaMedicos.filter(medico => medico.idMedico != action.idMedico)
                newState.listaMedicos = novaListaMedicos;
            }

            return {
                ...newState,
                loading: false,
                bolDesvinculo:true,
                bolExecutado: true,
                bolSucesso: action.idMedico != null,
                mensagemFalha: action.mensagemFalha
            }
        }


        default: {
            return state;
        }
    }
}