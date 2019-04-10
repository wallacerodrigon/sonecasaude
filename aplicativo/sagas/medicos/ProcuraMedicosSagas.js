import { call, put } from 'redux-saga/effects';
import { BUSMED_CONSULTA_FALHA, BUSMED_CONSULTA_SUCESSO, BUSMED_INICIANDO, BUSMED_VINCULAR_FALHA, BUSMED_VINCULAR_SUCESSO } from "../../actions/medicos/ProcuraMedicosAction";
import { MensagemInformativa } from "../../components/mensagens/Mensagens";
import { RETORNO_SUCESSO, RETORNO_SERVER_INDISPONIVEL } from "../../constants/ConstantesInternas";
import MedicosServico from "../../servicos/MedicosServico";



export function* filtrarMedicos(action){
    yield put({type: BUSMED_INICIANDO});
    try {
        const retorno = yield call(MedicosServico.filtrarMedicos, action.nomeMedico, action.numCrm);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: BUSMED_CONSULTA_SUCESSO,  listaMedicos: retorno.data.retorno});
        } else {
            yield put({type: BUSMED_CONSULTA_FALHA, mensagemFalha: retorno.mensagemErro});
            if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
                MensagemInformativa(retorno.mensagemErro);
            }
        }
    } catch(error){
        yield put({type: BUSMED_CONSULTA_FALHA, mensagemFalha: error});
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
            if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
                MensagemInformativa(retorno.mensagemErro);
            }
        }
    } catch(error){
        yield put({type: BUSMED_VINCULAR_FALHA, mensagemFalha: error});
    }
}