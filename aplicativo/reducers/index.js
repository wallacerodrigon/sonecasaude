import {combineReducers} from "redux";

import LoginReducer from "./LoginReducer";
//import CadastroReducer from "./CadastroReducer";

export default combineReducers({
    loginReducer: LoginReducer,
   // cadastroReducer: CadastroReducer
})