import { takeLatest } from 'redux-saga/effects';
import { BUSCA_CEP, BUSCA_GRAU_PARENTESCO, CADASTRAR_USUARIO, VERIFICA_CADASTRO } from '../actions/CadastroAction';
import { RECUPERAR_SENHA } from '../actions/EsqueciSenhaAction';
import { EFETUAR_LOGIN } from '../actions/LoginAction';
import { buscarDadosEndereco, recuperarGrausParentesco, salvarCadastro, verificarExistenciaCpf } from './CadastrarUsuarioSagas';
import { efetuarLogin } from "./LoginSagas";
import { recuperarSenha } from './RecuperarSenhaSagas';
import { recuperarMedicos, desvincularMedico } from './MedicosSagas';
import { BUSCAR_MEDICOS, DESVINCULAR_MEDICO } from '../actions/MedicosAction';

  
 function* rootSaga() {
    yield takeLatest(RECUPERAR_SENHA, recuperarSenha);

    //cadastro
    yield takeLatest(BUSCA_CEP, buscarDadosEndereco);
    yield takeLatest(CADASTRAR_USUARIO, salvarCadastro);
    yield takeLatest(VERIFICA_CADASTRO, verificarExistenciaCpf);

    //login
    yield takeLatest(EFETUAR_LOGIN, efetuarLogin);

    //medicos
    yield takeLatest(BUSCAR_MEDICOS, recuperarMedicos);
    yield takeLatest(DESVINCULAR_MEDICO, desvincularMedico);
  }
  
  export default rootSaga;