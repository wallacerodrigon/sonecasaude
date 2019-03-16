import { 
    CHANGE_FIELD, CADASTRAR_USUARIO_SUCESSO, CADASTRAR_USUARIO_FALHA, INICIA_BUSCA_CEP, BUSCA_CEP_SUCESSO, BUSCA_CEP_FALHA,
    START_CADASTRO, END_CADASTRO, TOGGLE_FIELD
} from "../actions/CadastroAction";

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
            tipoCompartilhamento: '' 
        },
        bolPlanoSaude: false,
        nomePlanoSaude: '',
        bolTransporte: false,
        descTransporte: '',
        bolConcordouTermo: false,
    },
    bolSalvo: false,
    descMensagemFalha: '',
    bolExecutado: false,
    loading: false
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_FIELD: {
            let newState = {...state, descMensagemFalha: ''};
            newState.user[action.fieldName]= action.value;
            return newState;
        }

        case TOGGLE_FIELD: {
            let newState = {...state};
            newState.user[action.fieldName]= !newState.user[action.fieldName];
            return newState;
        }

        case START_CADASTRO: {
            return {
                ...state,
                bolExecutado: false,
                loading: true
            };
        }        

        case CADASTRAR_USUARIO_SUCESSO: {
            return {
                ...INITIAL_STATE,
                bolExecutado: true,
            };
        }

        case CADASTRAR_USUARIO_FALHA: {
            let newState = {
                ...state,
                bolExecutado: true,
                loading: false,
                descMensagemFalha: action.mensagemFalha
            };
            return newState;        
        }

        case END_CADASTRO: {
            return {
                ...state,
                bolExecutado: true,
                loading: false
            };
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

