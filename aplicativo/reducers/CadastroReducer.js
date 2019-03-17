import { BUSCA_CEP_FALHA, BUSCA_CEP_SUCESSO, CADASTRAR_USUARIO_FALHA, CADASTRAR_USUARIO_SUCESSO, CHANGE_FIELD, INICIA_BUSCA_CEP, 
    START_CADASTRO, TOGGLE_FIELD, CHANGE_FIELD_SHARING, TOGGLE_FIELD_SHARING } from "../actions/CadastroAction";
import { PERFIL_PACIENTE } from "../constants/ConstantesInternas";


const INITIAL_STATE = {
    user: {
        codPerfil: PERFIL_PACIENTE,
        numCpf: '',
        descEmail: '',
        nomeUsuario: '',
        dataNascimento: '',
        numCelular: '',
        sexo: '',
        numCep: '',
        estado: '', 
        cidade: '',
        bairro: '',
        idLogradouro: null,
        logradouro: '', 
        numero: '',
        complemento: '',

        desafios: [],

        compartilhamento: { 
            numCpf: '', 
            descEmail: '',
            nomePessoa: '',
            grauParentesco: '', 
            compartilhouMedicacao: false,
            compartilhouTransporte: false,
            numCelular: '' 
        },
        bolPlanoSaude: false,
        nomePlanoSaude: '',
        bolTransporte: false,
        descTransporte: '',
        bolConcordouTermo: false, //default false
    },
    bolSalvo: false,
    descMensagemFalha: '',
    bolExecutado: false,
    loading: false,

}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_FIELD: {
            let newState = {...state, descMensagemFalha: '', bolExecutado: false, bolSalvo: false};
            newState.user[action.fieldName]= action.value;
            return newState;
        }

        case TOGGLE_FIELD: {
            let newState = {...state, bolExecutado: false, bolSalvo: false};
            newState.user[action.fieldName]= !newState.user[action.fieldName];
            return newState;
        }

        case CHANGE_FIELD_SHARING: {
            let newState = {...state, descMensagemFalha: '', bolExecutado: false, bolSalvo: false};
            newState.user.compartilhamento[action.fieldName]= action.value;
            return newState;
        }        


        case TOGGLE_FIELD_SHARING: {
            let newState = {...state, bolExecutado: false, bolSalvo: false};
            newState.user.compartilhamento[action.fieldName]= !newState.user.compartilhamento[action.fieldName];
            return newState;
        }        

        case START_CADASTRO: {
            return {
                ...state,
                bolExecutado: false,
                loading: true,
                bolSalvo: false
            };
        }        

        case CADASTRAR_USUARIO_SUCESSO: {
            let newState = INITIAL_STATE;
            return {...newState, 
                    bolExecutado: true,
                    bolSalvo: true}
            
        }

        case CADASTRAR_USUARIO_FALHA: {
            let newState = {
                ...state,
                bolExecutado: true,
                loading: false,
                bolSalvo: false,
                descMensagemFalha: action.mensagemFalha
            };
            return newState;        
        }
      

        case INICIA_BUSCA_CEP: {
            return {
                ...state, loading: true
            }
        }

        case BUSCA_CEP_SUCESSO: {
            let newState = {
                ...state,
                bolExecutado: true,
                loading: false
            };
            newState.user["estado"]= action.dadosEndereco.estado;
            newState.user["cidade"]= action.dadosEndereco.cidade;
            newState.user["bairro"]= action.dadosEndereco.bairro;
            newState.user["idLogradouro"]= action.dadosEndereco.idLogradouro;
            newState.user["logradouro"]= action.dadosEndereco.logradouro;
            return newState;
        }

        case BUSCA_CEP_FALHA: {
            let newState = {
                ...state,
                bolExecutado: true,
                loading: false,
                descMensagemFalha:  action.mensagemFalha
            };
            newState.user["estado"]= "";
            newState.user["cidade"]= "";
            newState.user["bairro"]= "";
            newState.user["idLogradouro"]= null;
            newState.user["logradouro"]= "";

            //console.log('Erro:', newState);

            return newState;
        }        

        default: {
            return state;
        }
    }

}

