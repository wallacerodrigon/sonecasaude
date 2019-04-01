import { call, put } from 'redux-saga/effects';
import { MEUMED_INICIANDO, MEUMED_DESVINCULAR_SUCESSO, MEUMED_DESVINCULAR_FALHA, MEUMED_RETORNO_SUCESSO, MEUMED_RETORNO_FALHA } from "../../actions/MeusMedicosAction";
import { NETWORK_ERROR, RETORNO_SUCESSO, INTERNET_INOPERANTE } from "../../constants/ConstantesInternas";
import MedicosServico from "../../servicos/MedicosServico";
import { CADMED_SALVO_SUCESSO, CADMED_SALVO_FALHA, CADMED_INICIANDO, CADMED_ESPECIALIDADE_SUCESSO, CADMED_ESPECIALIDADE_FALHA, CADMED_ESPECIALIDADE_INICIA } from '../../actions/medicos/CadastroMedicosAction';

export function* recuperarMedicos(action){
    yield put({type: MEUMED_INICIANDO});
    try {
        const retorno = yield call(MedicosServico.recuperarMedicos);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: MEUMED_RETORNO_SUCESSO,  listaMedicos: retorno.data.retorno});
        } else {
            yield put({type: MEUMED_RETORNO_FALHA, mensagemFalha: retorno.mensagemErro});
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: MEUMED_RETORNO_FALHA, mensagemFalha: error});
        }


    }
}

export function* desvincularMedico(action){
    yield put({type: MEUMED_INICIANDO});
    try {
        const retorno = yield call(MedicosServico.desvincularMedico, action.medico);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: MEUMED_DESVINCULAR_SUCESSO, idMedico: action.medico.idMedico});
        } else {
            yield put({type: MEUMED_DESVINCULAR_FALHA, mensagemFalha: retorno.mensagemErro, idMedico: null});
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: MEUMED_DESVINCULAR_FALHA, mensagemFalha: error});
        }


    }
}

export function* salvarMedico(action){
    yield put({type: CADMED_INICIANDO});
    try {
        const {medico} = action;
        console.log('salvando médico', medico);
        if (medico.idMedico != null){
            retorno = yield call(MedicosServico.alterarMedico, medico);
        } else {
            retorno = yield call(MedicosServico.salvarMedico, medico);
        }
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: CADMED_SALVO_SUCESSO});
        } else {
            yield put({type: CADMED_SALVO_FALHA, mensagemFalha: retorno.mensagemErro});
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: CADMED_SALVO_FALHA, mensagemFalha: error});
        }
    }
}

export function* buscarEspecialidades(action){
    yield put({type: CADMED_ESPECIALIDADE_INICIA});
    try {
        const retorno = yield call(MedicosServico.obterEspecialidades);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: CADMED_ESPECIALIDADE_SUCESSO, listaEspecialidades: retorno.data.retorno});
        } else {
            yield put({type: CADMED_ESPECIALIDADE_FALHA, mensagemFalha: retorno.mensagemErro});
        }
    } catch(error){
        //TENTAR MONTAR UM LUGAR ÚNICO PARA TRATAR A MENSAGEM OU RETORNAR A MENSAGEM DO ERRO
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: CADMED_ESPECIALIDADE_FALHA, mensagemFalha: error});
        }
    }
}