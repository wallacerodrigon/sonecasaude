import { RECSEN_ERRO_INESPERADO, RECSEN_INTERNET_INOPERANTE, RECSEN_END_RECUPERACAO, RECSEN_START_RECUPERACAO, RECSEN_CHANGE_FIELD, RECSEN_RECUPERAR } from "../actions/EsqueciSenhaAction";
import { alterarState } from "./FuncoesGenericas";

const INITIAL_STATE = {email: '', loading: false, sucesso: true, mensagemFalha: '', executado: false};


export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case RECSEN_CHANGE_FIELD: {
            let newState = alterarState(state, 'email', action.value);
            return alterarState(newState, 'executado', false);
        }

        case RECSEN_START_RECUPERACAO: {
            return {
                ...state, loading: true
            }
        }

        case RECSEN_END_RECUPERACAO: {
            return {
                ...state, loading: false, sucesso: true, executado: true
            }
        }

        case RECSEN_INTERNET_INOPERANTE: {
          //  console.log('erro de internet...');
            let newState = {
                ...state, 
                sucesso: false, 
                executado: true,
                loading: false, 
                mensagemFalha: 'Favor verificar sua internet. Não foi possível se comunicar com o soneca servidor!'
            };
          //  console.log(newState);
            return newState;

        }
        
        case RECSEN_ERRO_INESPERADO: {
            return {
                ...state, 
                loading: false, 
                executado: true,
                sucesso: false,
                mensagemFalha: action.mensagemFalha
            }

        }

        case RECSEN_RECUPERAR: {
            return state;
        }

        default: {
            return state;
        }

    }
}