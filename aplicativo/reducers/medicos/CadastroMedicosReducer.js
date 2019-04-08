import { CADCLI_VINCULO_DESVINCULO_FALHA, CADCLI_VINCULO_DESVINCULO_INICIA, CADCLI_VINCULO_DESVINCULO_SUCESSO } from "../../actions/clinicas/CadastroClinicasAction";
import { CADMED_CHANGE_FIELD, CADMED_DESVINCULAR_CLINICA, CADMED_ESPECIALIDADE_FALHA, CADMED_ESPECIALIDADE_INICIA, CADMED_ESPECIALIDADE_SUCESSO, CADMED_INICIANDO, CADMED_RESET, CADMED_SALVO_FALHA, CADMED_SALVO_SUCESSO, CADMED_VINCULO_CLINICA_LOCAL } from "../../actions/medicos/CadastroMedicosAction";
import { MEUMED_EDITAR_MEDICO_SUCESSO } from "../../actions/medicos/MeusMedicosAction";
import { INTERNET_INOPERANTE } from "../../constants/ConstantesInternas";

const INITIAL_STATE = {
    medico: {idMedico: null, nomeMedico:'', codEspecialidade: null, numRegistroCrm:'', descEmail:'', numCelular:'', clinicas: []},
    mensagemFalha: '', loading: false, bolSucesso: false, bolExecutado: false, loadingEspecialidades: false,listaEspecialidades:[],
    bolVinculo: false
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
            let newState = {...state, bolSucesso: true, bolExecutado:true, loading: false};
            newState.listaEspecialidades = state.listaEspecialidades;
            newState.medico.idMedico = action.idMedico;
            return {...newState};
        }

        case CADMED_RESET: {
            let newState = {...INITIAL_STATE};
            newState.medico = {nomeMedico:'', codEspecialidade: null, numRegistroCrm:'', descEmail:'', numCelular:'', clinicas: []};
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

        case CADMED_DESVINCULAR_CLINICA: {
            return {
                ...state
            }
        }        

        //código sujo. Limpar
        case MEUMED_EDITAR_MEDICO_SUCESSO: {
            let newState = {...state};
            Object.assign(newState.medico, action.medico);
            newState.loading= false;
            return newState;
        }

        case CADCLI_VINCULO_DESVINCULO_INICIA:{
            return {
                ...state,
                loading: true,
                bolVinculo: false,
                mensagemFalha: ''
            }

        }

        case CADCLI_VINCULO_DESVINCULO_SUCESSO:{
            let novaListaClinicas = state.medico.clinicas.filter(clinica => clinica.idClinica != action.codClinicaDesvinculada);
            let newState = {...state, bolVinculo: true, loading: false, mensagemFalha: ''};
            newState.medico.clinicas = novaListaClinicas;
            return {
                ...newState
            }
    
        }

        case CADCLI_VINCULO_DESVINCULO_FALHA: {
            return {
                ...state,
                bolVinculo: true,
                loading: false,
                mensagemFalha: action.mensagemFalha
            }
        }

        case CADMED_VINCULO_CLINICA_LOCAL:{
            let medico = {...state.medico};
            medico.clinicas.push(action.clinica);
            return {
                ...newState, medico
            }
    
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