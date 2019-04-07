import { CADCLI_BUSCA_CLINICA, CADCLI_CHANGE_FIELD, CADCLI_INICIANDO, CADCLI_SALVO_FALHA, CADCLI_SALVO_SUCESSO, CADCLI_SETA_CLINICA, CAD_CLI_BUSCA_CEP_FIM, CAD_CLI_BUSCA_CEP_INICIO } from "../../actions/clinicas/CadastroClinicasAction";

const INITIAL_STATE = {
    
    clinica: {nomeClinica: '', numCep: '', nomeEstado: '', nomeCidade: '', nomeBairro: '', codLogradouro: '', nomeLogradouro: '', 
    numLocalEndereco: '', descComplemento: '',numTelefone:''},
    bolSucesso: false, mensagemFalha: '', loading: false, loadingCep: false
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

        case CADCLI_SETA_CLINICA: {
            return {
                ...state,
                clinica: action.clinica
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

        case CAD_CLI_BUSCA_CEP_INICIO: {
            return {
                ...state,
                loadingCep: true,
                mensagemFalha: ''
            }
        }

        case CAD_CLI_BUSCA_CEP_FIM: {
            let newState = {...state};
            if (action.dadosEndereco){
                newState.clinica.nomeEstado= action.dadosEndereco.estado, 
                newState.clinica.nomeCidade= action.dadosEndereco.cidade, 
                newState.clinica.nomeBairro= action.dadosEndereco.bairro, 
                newState.clinica.codLogradouro= action.dadosEndereco.idLogradouro, 
                newState.clinica.nomeLogradouro= action.dadosEndereco.logradouro                
            } else {
                newState.clinica.nomeEstado= '';
                newState.clinica.nomeCidade= '';
                newState.clinica.nomeBairro= '';
                newState.clinica.codLogradouro= ''; 
                newState.clinica.nomeLogradouro= '';
            }

            return {
                ...newState,
                loadingCep: false,
                mensagemFalha: action.mensagemFalha,
            }
        }


        default: return state;
    }
}