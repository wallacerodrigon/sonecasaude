import { call, put } from 'redux-saga/effects';

import { BUSMED_INICIANDO, BUSMED_CONSULTA_FALHA, BUSMED_CONSULTA_SUCESSO, BUSMED_VINCULAR_SUCESSO, BUSMED_VINCULAR_FALHA } from "../../actions/medicos/ProcuraMedicosAction";
import { NETWORK_ERROR, RETORNO_SUCESSO, INTERNET_INOPERANTE } from "../../constants/ConstantesInternas";

import MedicosServico from "../../servicos/MedicosServico";
import { MensagemInformativa } from "../../components/mensagens/Mensagens";

export function* filtrarMedicos(action){
    yield put({type: BUSMED_INICIANDO});
    try {
        const retorno = yield call(MedicosServico.filtrarMedicos, action.nomeMedico, action.numCrm);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: BUSMED_CONSULTA_SUCESSO,  listaMedicos: retorno.data.retorno});
        } else {
            yield put({type: BUSMED_CONSULTA_FALHA, mensagemFalha: retorno.mensagemErro});
            MensagemInformativa(retorno.mensagemErro);
        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: BUSMED_CONSULTA_FALHA, mensagemFalha: error});
        }
        MensagemInformativa(error);


    }
}

export function* vincularMedico(action){
    yield put({type: BUSMED_INICIANDO});
    try {
        const retorno = yield call(MedicosServico.vincularMedico, action.medico);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: BUSMED_VINCULAR_SUCESSO, medicoVinculado: action.medico});
            MensagemInformativa('Vínculo efetuado com sucesso!');

        } else {
            yield put({type: BUSMED_VINCULAR_FALHA, mensagemFalha: retorno.mensagemErro});
            MensagemInformativa(retorno.mensagemErro);

        }
    } catch(error){
        if (error == NETWORK_ERROR) {
            yield put({type: INTERNET_INOPERANTE});
        } else {
            yield put({type: BUSMED_VINCULAR_FALHA, mensagemFalha: error});
        }
        MensagemInformativa(error);


    }
}