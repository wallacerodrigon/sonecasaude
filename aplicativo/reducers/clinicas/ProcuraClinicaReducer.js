import { CADCLI_BUSCA_CLINICA_FALHA, CADCLI_BUSCA_CLINICA_FIM, CADCLI_BUSCA_CLINICA_INICIANDO, CADCLI_CHANGE_FIELD_BUSCA, CADCLI_VINCULO_DESVINCULO_SUCESSO } from "../../actions/clinicas/CadastroClinicasAction";
import { alterarState } from "../FuncoesGenericas";


const INITIAL_STATE = {
    nomeClinica: '', bolSucesso: false, mensagemFalha: '', loading: false, bolVinculado: false,listaClinicas:[]
}

export default (state= INITIAL_STATE, action) => {
    switch(action.type){
        case CADCLI_CHANGE_FIELD_BUSCA: {
            let newState = alterarState(state, action.fieldName, action.value);
            newState.bolSucesso = false;
            newState.mensagemFalha = '';
            return newState;
        }

        case CADCLI_BUSCA_CLINICA_INICIANDO: {
            return {
                ...state,
                loading: true,
                bolSucesso: false,
                mensagemFalha: '',
                bolVinculado: false
            }
        }

        //desvinculo
        case CADCLI_VINCULO_DESVINCULO_SUCESSO:{
            let listaClinicas = [];
            if (state.listaClinicas != null){
                listaClinicas =state.listaClinicas.filter(clinica => clinica.idClinica != action.clinicaVinculada.idClinica);
            }

            return {
                ...state,
                loading: false,
                bolVinculado: true,
                listaClinicas
            }
        }


        case CADCLI_BUSCA_CLINICA_FIM: {
            return {
                ...state,
                loading: false,
                bolSucesso: true,
                listaClinicas: action.listaClinicas
            }

        }

        case CADCLI_BUSCA_CLINICA_FALHA: {
            return {
                ...state,
                loading: false,
                bolSucesso: false,
                mensagemFalha: action.mensagemFalha
            }

        }

        default: return state;
    }
}