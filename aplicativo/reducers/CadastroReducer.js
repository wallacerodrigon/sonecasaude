import { 
    CHANGE_FIELD, CADASTRAR_USUARIO, INICIA_BUSCA_CEP, BUSCA_CEP_SUCESSO, BUSCA_CEP_FALHA
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
            let newState = {...state};
            newState.user[action.fieldName]= action.value;
            return newState;
        }

        case CADASTRAR_USUARIO: {
            //ponto final..
            console.log('state no reducer:', state);
            return state;
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
            newState.user["estado"]= action.dadosEndereco.estado,
            newState.user["cidade"]= action.dadosEndereco.cidade,
            newState.user["bairro"]= action.dadosEndereco.bairro,
            newState.user["idLogradouro"]= action.dadosEndereco.idLogradouro,
            newState.user["logradouro"]= action.dadosEndereco.logradouro
            return newState;
        }

        case BUSCA_CEP_FALHA: {
            let newState = {
                ...state,
                bolExecutado: true,
                loading: false
            };
            newState.user["estado"]= "";
            newState.user["cidade"]= "";
            newState.user["bairro"]= "";
            newState.user["idLogradouro"]= null;
            newState.user["logradouro"]= "";
            return newState;
        }        

        default: {
            return state;
        }
    }

}

