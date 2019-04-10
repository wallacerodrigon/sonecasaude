import { CADUSU_BUSCA_CEP, CADUSU_BUSCA_CEP_FALHA, CADUSU_BUSCA_CEP_SUCESSO, CADUSU_CHANGE_FIELD, CADUSU_FALHA, CADUSU_START_CADASTRO, CADUSU_SUCESSO, CADUSU_TOGGLE_FIELD, CADUSU_VERIFICA_CPF_FALHA, CADUSU_VERIFICA_CPF_SUCESSO } from "../actions/CadastroAction";
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
        bolPlanoSaude: false,
        nomePlanoSaude: '',
        bolTransporte: false,
        descTransporte: '',
        bolConcordouTermo: false
    },
    bolSalvo: false,
    descMensagemFalha: '',
    bolExecutado: false,
    loading: false,
    listaGrausParentesco: [],
    bolVerificouCpf: false,
    bolProibeCadastro: false

}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CADUSU_CHANGE_FIELD: {
            let newState = {...state, descMensagemFalha: '', bolExecutado: false, bolSalvo: false, bolVerificouCpf: false, bolProibeCadastro: false};
            newState.user[action.fieldName]= action.value;
            return newState;
        }

        case CADUSU_TOGGLE_FIELD: {
            let newState = {...state, bolExecutado: false, bolSalvo: false,  descMensagemFalha: ''};
            newState.user[action.fieldName]= !newState.user[action.fieldName];
            return newState;
        }

        case CADUSU_START_CADASTRO: {
            return {
                ...state,
                bolExecutado: false,
                loading: true,
                bolSalvo: false,
                descMensagemFalha: '',
                bolVerificouCpf: false
            };
        }        

        case CADUSU_SUCESSO: {
            let newState = {
                user: {
                    codPerfil: null,
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
                    bolPlanoSaude: false,
                    nomePlanoSaude: '',
                    bolTransporte: false,
                    descTransporte: '',
                    bolConcordouTermo: false
                },
               bolExecutado: true, bolSalvo: true, loading: false, descMensagemFalha: '', bolVerificouCpf: false,
               bolProibeCadastro: false                
            
            }    
            return newState;
            
        }

        case CADUSU_FALHA: {
            let newState = {
                ...state,
                bolExecutado: true,
                loading: false,
                bolSalvo: false,
                bolVerificouCpf: false,
                bolProibeCadastro: false,
                descMensagemFalha: action.mensagemFalha
            };
            return newState;        
        }
      

        case CADUSU_BUSCA_CEP: {
            return {
                ...state, loading: true, bolVerificouCpf: false
            }
        }

        case CADUSU_BUSCA_CEP_SUCESSO: {
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

        case CADUSU_BUSCA_CEP_FALHA: {
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
            return newState;
        }     
        
        case CADUSU_VERIFICA_CPF_FALHA: {
            return {
                ...state,
                bolVerificouCpf: true,
                loading: false,
                bolExecutado: true,
                bolProibeCadastro: true,
                descMensagemFalha: action.mensagemFalha
            }
        }

        case CADUSU_VERIFICA_CPF_SUCESSO: {
            return {
                ...state,
                loading: false,
                bolExecutado: true,
                bolVerificouCpf: true,
                bolProibeCadastro: action.cpfJaExiste,
                descMensagemFalha: action.mensagemFalha
            }
        }

        

        default: {
          //  console.log('default');
            return state;
        }
    }

}

