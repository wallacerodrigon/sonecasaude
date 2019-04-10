import { takeLatest } from 'redux-saga/effects';
import { CADUSU_BUSCA_CEP, CADUSU_CADASTRAR_USUARIO, CADUSU_VERIFICA_CPF } from '../actions/CadastroAction';
import { CADCLI_BUSCA_CLINICA, CADCLI_SALVAR_CLINICA, CADCLI_VINCULAR_CLINICA, CAD_CLI_BUSCA_CEP } from '../actions/clinicas/CadastroClinicasAction';
import { RECSEN_RECUPERAR } from '../actions/EsqueciSenhaAction';
import { LOGIN_EFETUAR_LOGIN } from '../actions/LoginAction';
import { CADREM_BUSCA_DETALHES_MEDICAMENTOS, CADREM_BUSCA_MEDICAMENTOS } from "../actions/medicamentos/MedicamentosAction";
import { CADMED_BUSCAR_ESPECIALIDADES, CADMED_DESVINCULAR_CLINICA, CADMED_SALVAR_MEDICOS } from '../actions/medicos/CadastroMedicosAction';
//actions
import { MEUMED_CONSULTAR, MEUMED_DESVINCULAR, MEUMED_EDITAR_MEDICO } from '../actions/medicos/MeusMedicosAction';
import { BUSMED_CONSULTAR_MEDICOS, BUSMED_VINCULAR } from '../actions/medicos/ProcuraMedicosAction';
//sagas
import { buscarDadosEndereco, salvarCadastro, verificarExistenciaCpf } from './CadastrarUsuarioSagas';
import { buscarClinicas, buscarEnderecoPorCep, salvarClinica, vincularClinica } from './clinicas/ClinicasSagas';
import { recuperarSenha } from './EsqueciSenhaSagas';
import { efetuarLogin } from "./LoginSagas";
import { listarDetalhesMedicamentos, listarMedicamentos } from "./medicamentos/MedicamentosSagas";
import { buscarEspecialidades, buscarMedicoEdicao, desvincularClinica, desvincularMedico, recuperarMedicos, salvarMedico } from './medicos/MeusMedicosSagas';
import { filtrarMedicos, vincularMedico } from './medicos/ProcuraMedicosSagas';



  
 function* rootSaga() {
    yield takeLatest(RECSEN_RECUPERAR, recuperarSenha);

    //cadastro
    yield takeLatest(CADUSU_BUSCA_CEP, buscarDadosEndereco);
    yield takeLatest(CADUSU_CADASTRAR_USUARIO, salvarCadastro);
    yield takeLatest(CADUSU_VERIFICA_CPF, verificarExistenciaCpf);

    //login
    yield takeLatest(LOGIN_EFETUAR_LOGIN, efetuarLogin);

    //medicos
    yield takeLatest(MEUMED_CONSULTAR, recuperarMedicos);
    yield takeLatest(MEUMED_DESVINCULAR, desvincularMedico);
    yield takeLatest(MEUMED_EDITAR_MEDICO, buscarMedicoEdicao);

    yield takeLatest(BUSMED_CONSULTAR_MEDICOS, filtrarMedicos);
    yield takeLatest(BUSMED_VINCULAR, vincularMedico);

    //cadastro de médicos
    yield takeLatest(CADMED_SALVAR_MEDICOS, salvarMedico);
    yield takeLatest(CADMED_BUSCAR_ESPECIALIDADES, buscarEspecialidades);
    yield takeLatest(CADMED_DESVINCULAR_CLINICA, desvincularClinica);
    

    //clinicas
     yield takeLatest(CADCLI_SALVAR_CLINICA, salvarClinica);
     yield takeLatest(CADCLI_VINCULAR_CLINICA, vincularClinica);
     yield takeLatest(CADCLI_BUSCA_CLINICA, buscarClinicas);
     yield takeLatest(CAD_CLI_BUSCA_CEP, buscarEnderecoPorCep);

     //medicamentos
     yield takeLatest(CADREM_BUSCA_MEDICAMENTOS, listarMedicamentos);
     yield takeLatest(CADREM_BUSCA_DETALHES_MEDICAMENTOS, listarDetalhesMedicamentos);
  }
  
  export default rootSaga;