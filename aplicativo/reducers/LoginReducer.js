import { EFETUAR_LOGIN, EFETUAR_LOGOUT, VALIDAR, CHANGE_FIELD } from "../actions";

const INITIAL_STATE = {
    login: 'seu e-mail', senha: ''
}
export default (state = INITIAL_STATE, action) => {
    console.log('login reducer. Parmetros: ', action);
    switch(action.type){
        case CHANGE_FIELD: {
            console.log(action);
            let newState = {...state, [action.fieldName]: action.value}
            return newState;
        }

        case VALIDAR: {
            ///valida o usuario e retorna-o caso seja valido...
            //boolean valido = validarPreenchimento(state.user);
            console.log(action, state);
            return action.user;
        }

        case EFETUAR_LOGIN: {
            console.log('efetuando login no reducer', action);
            
            if (action.user.login === 'wal' && action.user.senha === '123456'){
                let newState = {...state, senha: null};
                state = newState;

                console.log('novo state: ', state);
                return action.user;
            } else {
                return null;
            }
        }

        case EFETUAR_LOGOUT: {
            return null;
        }

        default: {
            console.log('default');
            return state;
        }
    }
}
