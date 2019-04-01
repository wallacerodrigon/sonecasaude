import { CADMED_CHANGE_FIELD, CADMED_INICIANDO, CADMED_SALVO_FALHA, CADMED_SALVO_SUCESSO, CADMED_ESPECIALIDADE_FALHA, 
    CADMED_ESPECIALIDADE_SUCESSO, CADMED_ESPECIALIDADE_INICIA, CADMED_RESET } from "../../actions/medicos/CadastroMedicosAction";
import { INTERNET_INOPERANTE } from "../../constants/ConstantesInternas";

const INITIAL_STATE = {
    medico: {idMedico: null, nomeMedico:'', codEspecialidade: null, numRegistroCrm:'', descEmail:'', numCelular:''},
    mensagemFalha: '', loading: false, bolSucesso: false, bolExecutado: false, loadingEspecialidades: false,listaEspecialidades:[]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CADMED_CHANGE_FIELD: {
            let newState = {...state};
            newState.medico[action.fieldName] = action.value;
            newState = {...newState, bolSucesso: false, mensagemFalha: '', bolExecutado: false}
            return newState;
        }

        case CADMED_INICIANDO: {
            return {
                ...state,
                loading: true,
                bolExecutado: false,
                mensagemFalha: '',
                bolSucesso: false
            }
        }

        case CADMED_SALVO_SUCESSO: {
            let newState = {...INITIAL_STATE, bolSucesso: true, bolExecutado:true};
            newState.listaEspecialidades = state.listaEspecialidades;
            return {...newState};
        }

        case CADMED_RESET: {
            let newState = {...INITIAL_STATE};
            newState.medico = {nomeMedico:'', codEspecialidade: null, numRegistroCrm:'', descEmail:'', numCelular:''};
            newState.listaEspecialidades = state.listaEspecialidades;
            return {...newState};
        }

        case CADMED_SALVO_FALHA: {
            return {...state, loading: false, bolSucesso: false, mensagemFalha: action.mensagemFalha, bolExecutado:true};
        }

        case CADMED_ESPECIALIDADE_INICIA: {
            return {
                ...state,
                loadingEspecialidades: true
            }
        }
        
        case CADMED_ESPECIALIDADE_SUCESSO: {
            return {...INITIAL_STATE, bolExecutado:true, loadingEspecialidades: false, listaEspecialidades: action.listaEspecialidades};
        }

        case CADMED_ESPECIALIDADE_FALHA: {
            return {...INITIAL_STATE, bolExecutado:true, loadingEspecialidades: false, mensagemFalha: action.mensagemFalha};
        }


        case INTERNET_INOPERANTE: {
            return {
                ...state,
                mensagemFalha: 'Erro ao buscar os dados. Favor verificar sua internet!',
                bolExecutado: true,
                
            };
        }

        default: {
            return state;
        }
    }
}