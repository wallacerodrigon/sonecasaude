import { RECUPERAR_SENHA, CHANGE_FIELD, START_RECUPERACAO, END_RECUPERACAO, INTERNET_INOPERANTE, EMAIL_INEXISTENTE, ERRO_INESPERADO, EMAIL_INVALIDO,  } from "../actions/EsqueciSenhaAction";
import { alterarState } from "./FuncoesGenericas";

const INITIAL_STATE = {email: '', loading: false, sucesso: true, mensagemFalha: '', executado: false};


export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case CHANGE_FIELD: {
            let newState = alterarState(state, 'email', action.value);
            return alterarState(newState, 'executado', false);
        }

        case START_RECUPERACAO: {
            return {
                ...state, loading: true
            }
        }

        case END_RECUPERACAO: {
            return {
                ...state, loading: false, sucesso: true, executado: true
            }
        }

        case INTERNET_INOPERANTE: {
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
        
        case ERRO_INESPERADO: {
            return {
                ...state, 
                loading: false, 
                executado: true,
                sucesso: false,
                mensagemFalha: "Ocorreu um erro na sua solicitação. Tente mais tarde!"
            }

        }

        case RECUPERAR_SENHA: {
            return state;
        }

        default: {
            return state;
        }

    }
}