import {
    takeLatest
  } from 'redux-saga/effects';
import { recuperarSenha } from './RecuperarSenhaSagas';
import { RECUPERAR_SENHA } from '../actions/EsqueciSenhaAction';
import { CADASTRAR_USUARIO, BUSCA_CEP  } from '../actions/CadastroAction';
import { salvarCadastro, buscarDadosEndereco } from './CadastrarUsuarioSagas';
  
    
  
 function* rootSaga() {
    yield takeLatest(RECUPERAR_SENHA, recuperarSenha);
    yield takeLatest(BUSCA_CEP, buscarDadosEndereco);
    yield takeLatest(CADASTRAR_USUARIO, salvarCadastro);
  }
  
  export default rootSaga;