import { BUSMED_CHANGE_FIELD, BUSMED_CONSULTA_SUCESSO, BUSMED_INICIANDO, BUSMED_CONSULTA_FALHA, BUSMED_VINCULAR_SUCESSO, BUSMED_VINCULAR_FALHA } from "../../actions/medicos/ProcuraMedicosAction";
import { alterarState } from "../FuncoesGenericas";


const INITIAL_STATE = {
    nomeMedico: '', numeroCrm: '', loading: false, buscaSucesso: false, mensagemFalha: '', buscaFalha: false, bolVinculo: false
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
                loading: true,
                bolVinculo: false
            }
        }

        case BUSMED_CONSULTA_SUCESSO: {
            return {
                ...state,
                loading: false,
                buscaSucesso: true,
                buscaFalha: false,
                listaMedicosBusca: action.listaMedicos
            }
        }

        case BUSMED_VINCULAR_FALHA:
        case BUSMED_CONSULTA_FALHA: {
            return {
                ...state,
                loading: false,
                buscaSucesso: false,
                buscaFalha: true,
                mensagemFalha: action.mensagemFalha
            }
        }

        case BUSMED_VINCULAR_SUCESSO: {
            let novaListaMedicos = state.listaMedicosBusca.filter(medico => medico.idMedico != action.medicoVinculado.idMedico);
            return {
                ...state,
                listaMedicosBusca: novaListaMedicos,
                loading: false,
                bolVinculo: true
            }

        }

        default: return state;
    }
}