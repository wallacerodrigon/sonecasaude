import { BUSMED_CHANGE_FIELD, BUSMED_CONSULTA_SUCESSO, BUSMED_INICIANDO, BUSMED_CONSULTA_FALHA } from "../../actions/medicos/ProcuraMedicosAction";
import { alterarState } from "../FuncoesGenericas";


const INITIAL_STATE = {
    nomeMedico: '', numeroCrm: '', loading: false, buscaSucesso: false, mensagemFalha: '', buscaFalha: false
}


export default (state = INITIAL_STATE, action) => {

    switch(action.type){

        case BUSMED_CHANGE_FIELD: {
            let newState = alterarState(state, action.fieldName, action.value);
            newState.buscaSucesso = false;
            return newState;
        }

        case BUSMED_INICIANDO: {
            return {
                ...state,
                loading: true
            }
        }

        case BUSMED_CONSULTA_SUCESSO: {
            return {
                ...state,
                loading: false,
                buscaSucesso: true,
                buscaFalha: false,
                listaMedicos: action.listaMedicos
            }
        }

        case BUSMED_CONSULTA_FALHA: {
            return {
                ...state,
                loading: false,
                buscaSucesso: false,
                buscaFalha: true,
                mensagemFalha: action.mensagemFalha
            }
        }


        default: return state;
    }
}