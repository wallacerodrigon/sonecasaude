import { takeLatest } from 'redux-saga/effects';
import { CADUSU_BUSCA_CEP, CADUSU_CADASTRAR_USUARIO, CADUSU_VERIFICA_CPF } from '../actions/CadastroAction';
import { RECSEN_RECUPERAR } from '../actions/EsqueciSenhaAction';
import { BUSMED_CONSULTAR_MEDICOS } from '../actions/medicos/ProcuraMedicosAction';
//actions
import { MEUMED_CONSULTAR, MEUMED_DESVINCULAR } from '../actions/MeusMedicosAction';
import { LOGIN_EFETUAR_LOGIN } from '../actions/LoginAction';

//sagas
import { buscarDadosEndereco, salvarCadastro, verificarExistenciaCpf } from './CadastrarUsuarioSagas';
import { efetuarLogin } from "./LoginSagas";
import { desvincularMedico, recuperarMedicos } from './medicos/MeusMedicosSagas';
import { filtrarMedicos } from './medicos/ProcuraMedicosSagas';
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
    yield takeLatest(BUSMED_CONSULTAR_MEDICOS, filtrarMedicos);

    
  }
  
  export default rootSaga;