import { call, put, delay } from 'redux-saga/effects';
import { BUSCA_CEP_FALHA, BUSCA_CEP_SUCESSO, INICIA_BUSCA_CEP, INTERNET_INOPERANTE, START_CADASTRO, END_CADASTRO } from "../actions/CadastroAction";
import { NETWORK_ERROR, RETORNO_SUCESSO } from "../constants/ConstantesInternas";
import EnderecoServico from "../servicos/EnderecoServico";



export function* salvarCadastro(action){

  yield put({type: START_CADASTRO});

  yield delay(3000);

  yield put({type: END_CADASTRO});

  //   try {
  //     const dadosEndereco = yield call(EnderecoServico.buscarCep, action.numCep);
  //     //console.log(dadosEndereco.status);
  //     if (dadosEndereco.status === RETORNO_SUCESSO ){
  //       const {retorno} = dadosEndereco.data;
        
  //       const retornoEndereco = {
  //         numCep: action.numCep,
  //         estado:  retorno.bairro.cidade.estado.nomeEstado,
  //         cidade: retorno.bairro.cidade.nomeCidade,
  //         bairro: retorno.bairro.nomeBairro,
  //         idLogradouro: retorno.idLogradouro,
  //         logradouro: retorno.nomeLogradouro + (retorno.descComplemento != null ? ` (${retorno.descComplemento})`: '')
  //       };
  //       yield put({type: BUSCA_CEP_SUCESSO, dadosEndereco: retornoEndereco })
  //     } else {
  //         yield put({type: BUSCA_CEP_FALHA, mensagemFalha: dadosEndereco.mensagemErro });
  //     }

  //   } catch(error){
  //       //console.log(error);
  //       if (error == NETWORK_ERROR) {
  //         yield put({type: INTERNET_INOPERANTE});
  //       }
  //       else {
  //         yield put({type: BUSCA_CEP_FALHA, mensagemFalha: error })
  //       } 
  //   }  

}

export function* buscarDadosEndereco(action){

  yield put({type: INICIA_BUSCA_CEP});

  try {
    const dadosEndereco = yield call(EnderecoServico.buscarCep, action.numCep);
    //console.log(dadosEndereco.status);
     if (dadosEndereco.status === RETORNO_SUCESSO ){
       const {retorno} = dadosEndereco.data;
       
       const retornoEndereco = {
         numCep: action.numCep,
         estado:  retorno.bairro.cidade.estado.nomeEstado,
         cidade: retorno.bairro.cidade.nomeCidade,
         bairro: retorno.bairro.nomeBairro,
         idLogradouro: retorno.idLogradouro,
         logradouro: retorno.nomeLogradouro + (retorno.descComplemento != null ? ` (${retorno.descComplemento})`: '')
       };
       yield put({type: BUSCA_CEP_SUCESSO, dadosEndereco: retornoEndereco })
     } else {
        yield put({type: BUSCA_CEP_FALHA, mensagemFalha: dadosEndereco.mensagemErro });
     }

  } catch(error){
      //console.log(error);
      if (error == NETWORK_ERROR) {
        yield put({type: INTERNET_INOPERANTE});
      }
      else {
        yield put({type: BUSCA_CEP_FALHA, mensagemFalha: error })
      } 
  }


}