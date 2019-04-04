import { CADCLI_INICIANDO, CADCLI_SALVO_SUCESSO, CADCLI_SALVO_FALHA, CADCLI_BUSCA_CLINICA, CADCLI_ALTERAR_CLINICA,
CADCLI_CHANGE_FIELD, CADCLI_DESVINCULAR_CLINICA, CADCLI_VINCULAR_CLINICA, CADCLI_VINCULO_DESVINCULO_FALHA, CADCLI_VINCULO_DESVINCULO_SUCESSO
} from "../../actions/clinicas/CadastroClinicasAction";

const INITIAL_STATE = {
    
    clinica: {nomeClinica: '', numCep: '', nomeEstado: '', nomeCidade: '', nomeBairro: '', codLogradouro: '', nomeLogradouro: '', 
    numLocalEndereco: '', descComplemento: '',numTelefone:''},
    bolSucesso: false, mensagemFalha: '', loading: false
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case CADCLI_CHANGE_FIELD: {
            let newState = {...state, bolSucesso: false, mensagemFalha: ''};
            newState.clinica[action.fieldName] = action.value;
            return newState;
        }

        case CADCLI_INICIANDO: {
            return {
                ...state,
                loading: true
            }
        }

        case CADCLI_BUSCA_CLINICA: {
            return {
                ...state,
                loading: true
            }
        }

        case CADCLI_SALVO_SUCESSO: {
            let newState = {
                clinica: {nomeClinica: '', numCep: '', nomeEstado: '', nomeCidade: '', nomeBairro: '', codLogradouro: '', nomeLogradouro: '', 
                numLocalEndereco: '', descComplemento: '',numTelefone:''},
                bolSucesso: true,mensagemFalha: '', loading: false
            }
            return newState;
        }


        case CADCLI_SALVO_FALHA: {
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