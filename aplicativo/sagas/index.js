import { takeLatest } from 'redux-saga/effects';
import { CADUSU_BUSCA_CEP, CADUSU_CADASTRAR_USUARIO, CADUSU_VERIFICA_CPF } from '../actions/CadastroAction';
import { CADCLI_BUSCA_CLINICA, CADCLI_DESVINCULAR_CLINICA, CADCLI_SALVAR_CLINICA, CADCLI_VINCULAR_CLINICA, CAD_CLI_BUSCA_CEP_INICIO, CAD_CLI_BUSCA_CEP } from '../actions/clinicas/CadastroClinicasAction';
import { RECSEN_RECUPERAR } from '../actions/EsqueciSenhaAction';
import { LOGIN_EFETUAR_LOGIN } from '../actions/LoginAction';
import { CADMED_BUSCAR_ESPECIALIDADES, CADMED_SALVAR_MEDICOS, CADMED_DESVINCULAR_CLINICA } from '../actions/medicos/CadastroMedicosAction';
import { BUSMED_CONSULTAR_MEDICOS, BUSMED_VINCULAR } from '../actions/medicos/ProcuraMedicosAction';
//actions
import { MEUMED_CONSULTAR, MEUMED_DESVINCULAR, MEUMED_EDITAR_MEDICO } from '../actions/MeusMedicosAction';
//sagas
import { buscarDadosEndereco, salvarCadastro, verificarExistenciaCpf } from './CadastrarUsuarioSagas';
import { buscarClinicas, salvarClinica, vincularClinica, buscarEnderecoPorCep } from './clinicas/ClinicasSagas';
import { efetuarLogin } from "./LoginSagas";
import { buscarEspecialidades, desvincularMedico, recuperarMedicos, salvarMedico, buscarMedicoEdicao, desvincularClinica } from './medicos/MeusMedicosSagas';
import { filtrarMedicos, vincularMedico } from './medicos/ProcuraMedicosSagas';
import { recuperarSenha } from './RecuperarSenhaSagas';


  
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

  }
  
  export default rootSaga;