import { takeLatest } from 'redux-saga/effects';
import { BUSCA_CEP, BUSCA_GRAU_PARENTESCO, CADASTRAR_USUARIO, VERIFICA_CADASTRO } from '../actions/CadastroAction';
import { RECUPERAR_SENHA } from '../actions/EsqueciSenhaAction';
import { EFETUAR_LOGIN } from '../actions/LoginAction';
import { buscarDadosEndereco, recuperarGrausParentesco, salvarCadastro, verificarExistenciaCpf } from './CadastrarUsuarioSagas';
import { efetuarLogin } from "./LoginSagas";
import { recuperarSenha } from './RecuperarSenhaSagas';

  
 function* rootSaga() {
    yield takeLatest(RECUPERAR_SENHA, recuperarSenha);
    yield takeLatest(BUSCA_CEP, buscarDadosEndereco);
    yield takeLatest(CADASTRAR_USUARIO, salvarCadastro);

    yield takeLatest(BUSCA_GRAU_PARENTESCO, recuperarGrausParentesco);
    yield takeLatest(EFETUAR_LOGIN, efetuarLogin);
    yield takeLatest(VERIFICA_CADASTRO, verificarExistenciaCpf);
  }
  
  export default rootSaga;