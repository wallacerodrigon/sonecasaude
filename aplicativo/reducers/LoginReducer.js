import { EFETUAR_LOGIN, EFETUAR_LOGOUT, VALIDAR, CHANGE_FIELD } from "../actions/LoginAction";
import axios  from "axios";

const INITIAL_STATE = {
    login: '', senha: '', validos: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_FIELD: {
            return alterarState(state, action.field, action.value);
        }

        case VALIDAR: {
             let result = dadosEstaoInformados(action);
             let newState = {...state, validos: result};
             return newState;
        }

        case EFETUAR_LOGIN: {
            //fazer tudo aqui com Sagas depois de ver melhor o redux-thunk            
           // if (action.user.login === 'wal' && action.user.senha === 'digo'){
                //state = {...state, senha: null};
                //return action.user;
                const retorno = efetuarLogin(action)
                return action.user;
           // } else {
                return state;
          //  }
        }

        case EFETUAR_LOGOUT: {
            return null;
        }

        default: {
            return state;
        }
    }
}

const dadosEstaoInformados = (action) => {
    return action.user.login && action.user.senha &&
           action.user.login.trim() != '' && action.user.senha.trim() != '' ? true : false;
}

const efetuarLogin = async (action) => {
    //let retorno = 
    const retorno = await axios.post('http://walltec.net.br/sysfinanc-api/rest/usuario/efetuarLogin', 
                    {login: action.user.login, senha: action.user.senha})
        // .then(function (sucesso) {
        //     console.log('sucesso: ');
        // })
        // .catch(function (erro) {
        //     console.log('erro');
        // })
    console.log('retornado com sucesso!');
    return retorno;
}