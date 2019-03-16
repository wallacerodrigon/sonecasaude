import { call, put } from 'redux-saga/effects';
import { BUSCA_CEP_FALHA, BUSCA_CEP_SUCESSO, INICIA_BUSCA_CEP, INTERNET_INOPERANTE } from "../actions/CadastroAction";
import { NETWORK_ERROR } from "../constants/ConstantesInternas";
import EnderecoServico from "../servicos/EnderecoServico";



export function* salvarCadastro(action){
    console.log('recuperando senha pela saga:', action);
    // yield put({type: START_CADASTRO});

    // try {
    //     const retorno = yield call(UsuarioServico.recuperarSenha, action.email);

    //     if (retorno.result){
    //         yield put({type: END_CADASTRO});
    //     } else {
    //         yield put({type: ERRO_CADASTRO, mensagem: retorno.mensagem});
    //     }
    // } catch(error){
    //     console.log('erro:',error);
    //     if (error == 'Error: Network Error') {
    //         yield put({type: INTERNET_INOPERANTE});
    //     }

    //     yield put({type: ERRO_CADASTRO, mensagem: error});

    // }

}

export function* buscarDadosEndereco(action){

  yield put({type: INICIA_BUSCA_CEP});

  try {
    const dadosEndereco = yield call(EnderecoServico.buscarCep, action.numCep);
    // if (action.numCep == '00000-000'){
    //   yield put({type: BUSCA_CEP_FALHA, mensagemFalha: 'Cep não encontrado' })
    // } else {
    //   const dadosEndereco = {
    //     numCep: action.numCep,
    //     estado: 'Distrito Federal',
    //     cidade: 'Ceilândia',
    //     bairro: 'Ceilândia Sul',
    //     idLogradouro: 10,
    //     logradouro: 'QNM 33 AE H'
    //   };
    // }
    yield put({type: BUSCA_CEP_SUCESSO, dadosEndereco })

  } catch(error){
      if (error == NETWORK_ERROR) {
        yield put({type: INTERNET_INOPERANTE});
      }
      else {
        yield put({type: BUSCA_CEP_FALHA, mensagemFalha: error })
      } 
  }


}