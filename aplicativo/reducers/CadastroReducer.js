import { 
    CHANGE_FIELD, CADASTRAR_USUARIO
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
        cep: '',
        estado: '', 
        cidade: '',
        bairro: '',
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
    descMensagemFalha: ''
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

        default: {
            return state;
        }
    }

}

