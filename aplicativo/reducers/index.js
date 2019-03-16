import {combineReducers} from "redux";

import LoginReducer from "./LoginReducer";
import EsqueciSenhaReducer from "./EsqueciSenhaReducer";
import CadastroReducer from "./CadastroReducer";

export default combineReducers({
    esqueciSenhaReducer: EsqueciSenhaReducer,
    loginReducer: LoginReducer,
    cadastroReducer: CadastroReducer
})
