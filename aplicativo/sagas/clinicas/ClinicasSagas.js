import { call, put } from 'redux-saga/effects';
import { CADCLI_BUSCA_CLINICA_INICIANDO, CADCLI_BUSCA_CLINICA_FIM, CADCLI_BUSCA_CLINICA_FALHA, CADCLI_SALVO_SUCESSO, CADCLI_SALVO_FALHA, CADCLI_VINCULO_DESVINCULO_FALHA, CADCLI_VINCULO_DESVINCULO_SUCESSO } from '../../actions/clinicas/CadastroClinicasAction';
import ClinicaServico from '../../servicos/ClinicaServico';
import { RETORNO_SUCESSO, NETWORK_ERROR, INTERNET_INOPERANTE } from '../../constants/ConstantesInternas';

export function* salvarClinica(action){
    yield put({type: CADCLI_BUSCA_CLINICA_INICIANDO});
    try {
        const retorno = yield call(ClinicaServico.salvarClinica, action.clinica);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: CADCLI_SALVO_SUCESSO});
        } else {
            yield put({type: CADCLI_SALVO_FALHA, mensagemFalha: retorno.mensagemErro});
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: CADCLI_SALVO_FALHA, mensagemFalha: error});
        }


    }}

export function* vincularClinica(action){
    yield put({type: CADCLI_BUSCA_CLINICA_INICIANDO});
    try {
        const retorno = yield call(ClinicaServico.vincularClinicaMedico, action.codClinica, action.codMedico);
        if (retorno.status === RETORNO_SUCESSO){
            console.log('vinculado')
            yield put({type: CADCLI_VINCULO_DESVINCULO_SUCESSO});
        } else {
            yield put({type: CADCLI_VINCULO_DESVINCULO_FALHA, mensagemFalha: retorno.mensagemErro});
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: CADCLI_VINCULO_DESVINCULO_FALHA, mensagemFalha: error});
        }


    }
}

export function* buscarClinicas(action){
    yield put({type: CADCLI_BUSCA_CLINICA_INICIANDO});
    try {
        const retorno = yield call(ClinicaServico.buscarClinicas, action.nomeClinica);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: CADCLI_BUSCA_CLINICA_FIM, listaClinicas: retorno.data.retorno});
        } else {
            yield put({type: CADCLI_BUSCA_CLINICA_FALHA, mensagemFalha: retorno.mensagemErro});
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: CADCLI_BUSCA_CLINICA_FALHA, mensagemFalha: error});
        }


    }
}