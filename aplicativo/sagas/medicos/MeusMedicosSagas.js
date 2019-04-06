import { call, put } from 'redux-saga/effects';
import { CADMED_ESPECIALIDADE_FALHA, CADMED_ESPECIALIDADE_INICIA, CADMED_ESPECIALIDADE_SUCESSO, CADMED_INICIANDO, CADMED_SALVO_FALHA, CADMED_SALVO_SUCESSO } from '../../actions/medicos/CadastroMedicosAction';
import { MEUMED_DESVINCULAR_FALHA, MEUMED_DESVINCULAR_SUCESSO, MEUMED_EDITAR_MEDICO_FALHA, MEUMED_EDITAR_MEDICO_INICIA, MEUMED_EDITAR_MEDICO_SUCESSO, MEUMED_INICIANDO, MEUMED_RETORNO_FALHA, MEUMED_RETORNO_SUCESSO } from "../../actions/MeusMedicosAction";
import { INTERNET_INOPERANTE, NETWORK_ERROR, RETORNO_SUCESSO } from "../../constants/ConstantesInternas";
import MedicosServico from "../../servicos/MedicosServico";
import { CADCLI_VINCULO_DESVINCULO_FALHA, CADCLI_VINCULO_DESVINCULO_SUCESSO, CADCLI_VINCULO_DESVINCULO_INICIA } from '../../actions/clinicas/CadastroClinicasAction';
import ClinicaServico from '../../servicos/ClinicaServico';

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
        if (medico.idMedico != null){
            retorno = yield call(MedicosServico.alterarMedico, medico);
        } else {
            retorno = yield call(MedicosServico.salvarMedico, medico);
        }
        if (retorno.status === RETORNO_SUCESSO){
            let idMedico = medico.idMedico == null ? retorno.data.retorno : medico.idMedico;

            yield put({type: CADMED_SALVO_SUCESSO, idMedico});
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

export function* buscarMedicoEdicao(action){
    yield put({type: MEUMED_EDITAR_MEDICO_INICIA});
    try {
        const retorno = yield call(MedicosServico.buscarMedico, action.codMedico);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: MEUMED_EDITAR_MEDICO_SUCESSO, medico: retorno.data.retorno});
        } else {
            yield put({type: MEUMED_EDITAR_MEDICO_FALHA, mensagemFalha: retorno.mensagemErro});
        }
    } catch(error){
        //TENTAR MONTAR UM LUGAR ÚNICO PARA TRATAR A MENSAGEM OU RETORNAR A MENSAGEM DO ERRO
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: MEUMED_EDITAR_MEDICO_FALHA, mensagemFalha: error});
        }
    }    
}

export function* desvincularClinica(action){
    yield put({type: CADCLI_VINCULO_DESVINCULO_INICIA});
    try {
        const retorno = yield call(ClinicaServico.desvincularClinicaMedico, action.codClinica, action.codMedico);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: CADCLI_VINCULO_DESVINCULO_SUCESSO, codClinicaDesvinculada: action.codClinica});
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