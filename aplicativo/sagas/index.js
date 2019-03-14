import {
    takeLatest
  } from 'redux-saga/effects';
import { recuperarSenha } from './RecuperarSenhaSagas';
import { RECUPERAR_SENHA } from '../actions/EsqueciSenhaAction';
import { FINALIZA_CADASTRO } from '../actions/CadastroAction';
import { salvarCadastro } from './CadastrarUsuarioSagas';
  
    
  
 function* rootSaga() {
    yield takeLatest(RECUPERAR_SENHA, recuperarSenha);
    yield takeLatest(FINALIZA_CADASTRO, salvarCadastro);
  }
  
  export default rootSaga;