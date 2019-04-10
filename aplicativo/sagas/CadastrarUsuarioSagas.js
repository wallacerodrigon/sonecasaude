import { call, put } from 'redux-saga/effects';
import { CADUSU_BUSCA_CEP_FALHA, CADUSU_BUSCA_CEP_SUCESSO, CADUSU_ERRO_CADASTRO, CADUSU_INICIA_BUSCA_CEP, CADUSU_START_CADASTRO, CADUSU_SUCESSO, CADUSU_VERIFICA_CPF_FALHA, CADUSU_VERIFICA_CPF_SUCESSO } from "../actions/CadastroAction";
import { MensagemInformativa } from '../components/mensagens/Mensagens';
import { RETORNO_SUCESSO, RETORNO_SERVER_INDISPONIVEL } from "../constants/ConstantesInternas";
import EnderecoServico from "../servicos/EnderecoServico";
import UsuarioServico from '../servicos/UsuarioServico';


export function* salvarCadastro(action){

  yield put({type: CADUSU_START_CADASTRO});

  try {
    const result = yield call(UsuarioServico.cadastrarUsuario, action.user);
    if (result.status === RETORNO_SUCESSO ){
      yield put({type: CADUSU_SUCESSO});
      MensagemInformativa('Cadastro salvo com sucesso. Enviamos a você um e-mail de ativação para acesso ao aplicativo!');
    } else {
      yield put({type: CADUSU_ERRO_CADASTRO, mensagemFalha: result.mensagemErro });
      if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
        MensagemInformativa(retorno.mensagemErro);
    }
}
    
  } catch(error){
    yield put({type: CADUSU_ERRO_CADASTRO, mensagemFalha: error});
  }
}

export function* buscarDadosEndereco(action){

  yield put({type: CADUSU_INICIA_BUSCA_CEP});

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
       yield put({type: CADUSU_BUSCA_CEP_SUCESSO, dadosEndereco: retornoEndereco })
     } else {
        yield put({type: CADUSU_BUSCA_CEP_FALHA, mensagemFalha: dadosEndereco.mensagemErro });
        if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
          MensagemInformativa(retorno.mensagemErro);
        }
     }

  } catch(error){
     yield put({type: CADUSU_BUSCA_CEP_FALHA, mensagemFalha: error })
  }


}

export function* verificarExistenciaCpf(action){
  yield put({type: CADUSU_START_CADASTRO});

  try {
    const retorno = yield call(UsuarioServico.existeCadastroComEsteCpf, action.numCpf);
    if (retorno.status === RETORNO_SUCESSO ){
      let  cpfJaExiste= retorno.data.retorno;
      yield put({type: CADUSU_VERIFICA_CPF_SUCESSO, cpfJaExiste});
      if (cpfJaExiste){
        MensagemInformativa('Já foi cadastrado uma outra pessoa com este mesmo CPF. Favor tentar novamente com um outro CPF!');
      }
    } else {
      yield put({type: CADUSU_VERIFICA_CPF_FALHA });
      if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
        MensagemInformativa(retorno.mensagemErro);
      }
    }
    
  } catch(error){
      yield put({type: CADUSU_VERIFICA_CPF_FALHA, mensagemFalha: error});
  }
}