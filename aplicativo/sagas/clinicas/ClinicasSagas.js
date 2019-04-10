import { call, put } from 'redux-saga/effects';
import { CADCLI_BUSCA_CLINICA_FALHA, CADCLI_BUSCA_CLINICA_FIM, CADCLI_BUSCA_CLINICA_INICIANDO, CADCLI_SALVAR_INICIANDO, CADCLI_SALVO_FALHA, CADCLI_SALVO_SUCESSO, CADCLI_VINCULAR_CLINICA_LOCAL, CADCLI_VINCULO_DESVINCULO_FALHA, CADCLI_VINCULO_DESVINCULO_SUCESSO, CAD_CLI_BUSCA_CEP_FIM, CAD_CLI_BUSCA_CEP_INICIO } from '../../actions/clinicas/CadastroClinicasAction';
import { MensagemInformativa } from "../../components/mensagens/Mensagens";
import { RETORNO_SUCESSO, RETORNO_SERVER_INDISPONIVEL } from '../../constants/ConstantesInternas';
import ClinicaServico from '../../servicos/ClinicaServico';
import EnderecoServico from '../../servicos/EnderecoServico';

export function* salvarClinica(action){
    yield put({type: CADCLI_SALVAR_INICIANDO});

    const nomeMetodo = action.clinica.idClinica && action.clinica.idClinica > 0 ? 'alterarClinica': 'salvarClinica';

    const retorno = yield call(ClinicaServico[nomeMetodo], action.clinica);
    if (retorno.status === RETORNO_SUCESSO){
        yield put({type: CADCLI_SALVO_SUCESSO});
        MensagemInformativa('Clínica salva com sucesso!');
    } else {
        yield put({type: CADCLI_SALVO_FALHA, mensagemFalha: retorno.mensagemErro});
        if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
            MensagemInformativa(retorno.mensagemErro);
        }
    } 
}

export function* vincularClinica(action){
    yield put({type: CADCLI_BUSCA_CLINICA_INICIANDO});
    try {
        const retorno = yield call(ClinicaServico.vincularClinicaMedico, action.clinica.idClinica, action.codMedico);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: CADCLI_VINCULO_DESVINCULO_SUCESSO, clinicaVinculada: action.clinica});
            yield put({type: CADCLI_VINCULAR_CLINICA_LOCAL, clinicaVinculada: action.clinica});

            MensagemInformativa('Clínica vinculada com sucesso!');
        } else {
            yield put({type: CADCLI_VINCULO_DESVINCULO_FALHA, mensagemFalha: retorno.mensagemErro});
            if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
                MensagemInformativa(retorno.mensagemErro);
            }
        
        }
    } catch(error){
        yield put({type: CADCLI_VINCULO_DESVINCULO_FALHA, mensagemFalha: error});
    }
}

export function* buscarClinicas(action){
    yield put({type: CADCLI_BUSCA_CLINICA_INICIANDO});
    try {
        const retorno = yield call(ClinicaServico.buscarClinicas, action.nomeClinica, action.codMedico);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: CADCLI_BUSCA_CLINICA_FIM, listaClinicas: retorno.data.retorno});
        } else {
            yield put({type: CADCLI_BUSCA_CLINICA_FALHA, mensagemFalha: retorno.mensagemErro});
            if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
                MensagemInformativa(retorno.mensagemErro);
            }
         }
    } catch(error){
        yield put({type: CADCLI_BUSCA_CLINICA_FALHA, mensagemFalha: error});
    }
}

export function* buscarEnderecoPorCep(action){

    yield put({type: CAD_CLI_BUSCA_CEP_INICIO});
    const dadosEndereco = yield call(EnderecoServico.buscarCep, action.numCep);
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
        yield put({type: CAD_CLI_BUSCA_CEP_FIM, dadosEndereco: retornoEndereco })
    } else {
        yield put({type: CAD_CLI_BUSCA_CEP_FIM, mensagemFalha: dadosEndereco.mensagemErro })
        if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
            MensagemInformativa(dadosEndereco.mensagemErro);
        }
    } 

}


