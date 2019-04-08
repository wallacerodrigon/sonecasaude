import {combineReducers} from "redux";

import LoginReducer from "./LoginReducer";
import EsqueciSenhaReducer from "./EsqueciSenhaReducer";
import CadastroReducer from "./CadastroReducer";
import MedicosReducer from "./medicos/MeusMedicosReducer";
import ProcuraMedicosReducer from "./medicos/ProcuraMedicosReducer";
import CadastroMedicosReducer from "./medicos/CadastroMedicosReducer";
import ClinicasReducer from "./clinicas/ClinicasReducer";
import ProcuraClinica from "../pages/medicos/ProcuraClinica";
import ProcuraClinicaReducer from "./clinicas/ProcuraClinicaReducer";
import MedicamentosReducer from "./medicamentos/MedicamentosReducer";

export default combineReducers({
    esqueciSenhaReducer: EsqueciSenhaReducer,
    loginReducer: LoginReducer,
    cadastroReducer: CadastroReducer,
    medicosReducer: MedicosReducer,
    procuraMedicosReducer: ProcuraMedicosReducer,
    cadastroMedicosReducer: CadastroMedicosReducer,
    clinicaReducer: ClinicasReducer,
    procuraClinicaReducer: ProcuraClinicaReducer,
    medicamentoReducer: MedicamentosReducer
})
