import {
    takeLatest
  } from 'redux-saga/effects';

import { RECUPERAR_SENHA } from '../actions/EsqueciSenhaAction';
import { CADASTRAR_USUARIO, BUSCA_CEP, BUSCA_GRAU_PARENTESCO  } from '../actions/CadastroAction';
  
import { recuperarSenha } from './RecuperarSenhaSagas';
import { salvarCadastro, buscarDadosEndereco, recuperarGrausParentesco } from './CadastrarUsuarioSagas';
    
  
 function* rootSaga() {
    yield takeLatest(RECUPERAR_SENHA, recuperarSenha);
    yield takeLatest(BUSCA_CEP, buscarDadosEndereco);
    yield takeLatest(CADASTRAR_USUARIO, salvarCadastro);

    yield takeLatest(BUSCA_GRAU_PARENTESCO, recuperarGrausParentesco);
    //yield takeLatest(BUSCA_DESAFIOS, recuperarDesafios);
  }
  
  export default rootSaga;