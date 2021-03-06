import { INTERNET_INOPERANTE, MEUMED_CHANGE_FIELD, MEUMED_DESVINCULAR_FALHA, MEUMED_DESVINCULAR_SUCESSO, MEUMED_EDITAR_MEDICO_FALHA, MEUMED_EDITAR_MEDICO_INICIA, MEUMED_EDITAR_MEDICO_SUCESSO, MEUMED_INICIANDO, MEUMED_RETORNO_FALHA, MEUMED_RETORNO_SUCESSO, MEUMED_VINCULAR } from "../../actions/medicos/MeusMedicosAction";
import { CADCLI_VINCULAR_CLINICA_LOCAL, CADCLI_VINCULO_SUCESSO } from "../../actions/clinicas/CadastroClinicasAction";

const INITIAL_STATE = {
    medico: {nomeMedico:'', codEspecialidade: null, numRegistroCrm:'', descEmail:'', numCelular:''},
    mensagemFalha: '', loading: false, bolSucesso: false, listaMedicos: [], bolExecutado: false, bolDesvinculo: false,
    bolEdita: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case MEUMED_CHANGE_FIELD: {
            let newState = {...state};
            newState.medico[action.fieldName] = action.value;
            newState = {...newState, bolSucesso: false, mensagemFalha: '', bolExecutado: false}
            return newState;
        }

        case MEUMED_INICIANDO: {
            return {
                ...state,
                loading: true,
                bolExecutado: false,
                mensagemFalha: '',
                bolSucesso: false
            }
        }

        case MEUMED_RETORNO_SUCESSO: {
            return {...INITIAL_STATE, bolSucesso: true, listaMedicos: action.listaMedicos, bolExecutado:true, bolDesvinculo: false};
        }

        case MEUMED_RETORNO_FALHA: {
            return {...state, loading: false, bolSucesso: false, mensagemFalha: action.mensagemFalha, bolExecutado:true};
        }

        case INTERNET_INOPERANTE: {
            return {
                ...state,
                mensagemFalha: 'Erro ao buscar os dados. Favor verificar sua internet!',
                bolExecutado: true,
                
            };
        }

        case MEUMED_VINCULAR: {
            let newState = {...state};
            let listaMedicos = state.listaMedicos.concat(action.medico);
            return {
                ...state,
                bolEdita: false,
                bolVinculo: false,
                mensagemFalha: '',
                listaMedicos
            }
        }

        case MEUMED_DESVINCULAR_SUCESSO: {
            let newState = {...state};

            if (state.listaMedicos != null){
                newState.listaMedicos = state.listaMedicos.filter(medico => medico.idMedico != action.idMedico)
            } else {
                newState.listaMedicos = [];
            }

            return {
                ...newState,
                loading: false,
                bolDesvinculo:true,
                bolExecutado: true,
                bolSucesso: true,
                mensagemFalha: ''
            }
        }

        case MEUMED_DESVINCULAR_FALHA: {
            return {
                ...state,
                loading: false,
                bolDesvinculo:true,
                bolExecutado: true,
                bolSucesso: false,
                mensagemFalha: action.mensagemFalha
            }            
        }

        case MEUMED_EDITAR_MEDICO_INICIA: {
            return {
                ...state,
                bolEdita: false,
                loading: true
            }
        }

        case MEUMED_EDITAR_MEDICO_SUCESSO: {
            return {
                ...state,
                bolEdita: true,
                loading: false,
                medico: action.medico
            }
        }

        case MEUMED_EDITAR_MEDICO_FALHA: {
            return {
                ...state,
                bolEdita: false,
                loading: false,
                mensagemFalha: action.mensagemFalha
            }
        }

        default: {
            return state;
        }
    }
}