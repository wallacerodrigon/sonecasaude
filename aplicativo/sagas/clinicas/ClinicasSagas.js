import { call, put } from 'redux-saga/effects';
import { CADCLI_BUSCA_CLINICA_INICIANDO, CADCLI_BUSCA_CLINICA_FIM, CADCLI_BUSCA_CLINICA_FALHA, CADCLI_SALVO_SUCESSO, CADCLI_SALVO_FALHA, 
    CADCLI_VINCULO_DESVINCULO_FALHA, 
    CADCLI_VINCULO_DESVINCULO_SUCESSO, 
    CAD_CLI_BUSCA_CEP_INICIO,
    CAD_CLI_BUSCA_CEP_FIM,
    CADCLI_SALVAR_INICIANDO} from '../../actions/clinicas/CadastroClinicasAction';
import ClinicaServico from '../../servicos/ClinicaServico';
import { RETORNO_SUCESSO, NETWORK_ERROR, INTERNET_INOPERANTE } from '../../constants/ConstantesInternas';
import EnderecoServico from '../../servicos/EnderecoServico';
import { MensagemInformativa } from "../../components/mensagens/Mensagens";
import { MEUMED_EDITAR_MEDICO_SUCESSO, MEUMED_EDITAR_MEDICO } from '../../actions/medicos/MeusMedicosAction';

export function* salvarClinica(action){
    yield put({type: CADCLI_SALVAR_INICIANDO});

    const nomeMetodo = action.clinica.idClinica && action.clinica.idClinica > 0 ? 'alterarClinica': 'salvarClinica';

    const retorno = yield call(ClinicaServico[nomeMetodo], action.clinica);
    if (retorno.status === RETORNO_SUCESSO){
        yield put({type: CADCLI_SALVO_SUCESSO});
        MensagemInformativa('Clínica salva com sucesso!');
    } else {
        yield put({type: CADCLI_SALVO_FALHA, mensagemFalha: retorno.mensagemErro});
        MensagemInformativa(retorno.mensagemErro);
    } 
}

export function* vincularClinica(action){
    yield put({type: CADCLI_BUSCA_CLINICA_INICIANDO});
    try {
        const retorno = yield call(ClinicaServico.vincularClinicaMedico, action.codClinica, action.codMedico);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: CADCLI_VINCULO_DESVINCULO_SUCESSO, codClinicaVinculada: action.codClinica});
            MensagemInformativa('Clínica vinculada com sucesso!');
        } else {
            yield put({type: CADCLI_VINCULO_DESVINCULO_FALHA, mensagemFalha: retorno.mensagemErro});
            MensagemInformativa(retorno.mensagemErro);
        }
    } catch(error){
        yield put({type: CADCLI_VINCULO_DESVINCULO_FALHA, mensagemFalha: error});
        MensagemInformativa(error);
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
            MensagemInformativa(retorno.mensagemErro);
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: CADCLI_BUSCA_CLINICA_FALHA, mensagemFalha: error});
        }
        MensagemInformativa(error);

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
        MensagemInformativa(dadosEndereco.mensagemErro);
    } 

}


