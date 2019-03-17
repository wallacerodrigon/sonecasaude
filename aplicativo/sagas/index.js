import {
    takeLatest
  } from 'redux-saga/effects';

import { RECUPERAR_SENHA } from '../actions/EsqueciSenhaAction';
import { BUSCA_GRAUS_PARENTESCO, BUSCA_DESAFIOS } from '../actions/LoginAction';
import { CADASTRAR_USUARIO, BUSCA_CEP  } from '../actions/CadastroAction';
  
import { recuperarSenha } from './RecuperarSenhaSagas';
import { salvarCadastro, buscarDadosEndereco } from './CadastrarUsuarioSagas';
import { recuperarDesafios, recuperarGrausParentesco } from "./LoginSagas";  
    
  
 function* rootSaga() {
    yield takeLatest(RECUPERAR_SENHA, recuperarSenha);
    yield takeLatest(BUSCA_CEP, buscarDadosEndereco);
    yield takeLatest(CADASTRAR_USUARIO, salvarCadastro);

    yield takeLatest(BUSCA_GRAUS_PARENTESCO, recuperarGrausParentesco);
    yield takeLatest(BUSCA_DESAFIOS, recuperarDesafios);
  }
  
  export default rootSaga;