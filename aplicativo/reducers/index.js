import {combineReducers} from "redux";

import LoginReducer from "./LoginReducer";
import EsqueciSenhaReducer from "./EsqueciSenhaReducer";
//import CadastroReducer from "./CadastroReducer";

export default combineReducers({
    esqueciSenhaReducer: EsqueciSenhaReducer,
    loginReducer: LoginReducer,
})
/*
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });*/