import {combineReducers} from "redux";

import LoginReducer from "./LoginReducer";
import EsqueciSenhaReducer from "./EsqueciSenhaReducer";
import CadastroReducer from "./CadastroReducer";
import MedicosReducer from "./MedicosReducer";
import ProcuraMedicosReducer from "./medicos/ProcuraMedicosReducer";

export default combineReducers({
    esqueciSenhaReducer: EsqueciSenhaReducer,
    loginReducer: LoginReducer,
    cadastroReducer: CadastroReducer,
    medicosReducer: MedicosReducer,
    procuraMedicosReducer: ProcuraMedicosReducer
})
