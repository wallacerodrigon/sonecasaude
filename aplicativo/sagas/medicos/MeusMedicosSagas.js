import { call, put } from 'redux-saga/effects';
import { CADCLI_VINCULO_DESVINCULO_FALHA, CADCLI_VINCULO_DESVINCULO_INICIA, CADCLI_VINCULO_DESVINCULO_SUCESSO } from '../../actions/clinicas/CadastroClinicasAction';
import { CADMED_ESPECIALIDADE_FALHA, CADMED_ESPECIALIDADE_INICIA, CADMED_ESPECIALIDADE_SUCESSO, CADMED_INICIANDO, CADMED_SALVO_FALHA, CADMED_SALVO_SUCESSO } from '../../actions/medicos/CadastroMedicosAction';
import { MEUMED_DESVINCULAR_FALHA, MEUMED_DESVINCULAR_SUCESSO, MEUMED_EDITAR_MEDICO_FALHA, MEUMED_EDITAR_MEDICO_INICIA, MEUMED_EDITAR_MEDICO_SUCESSO, MEUMED_INICIANDO, MEUMED_RETORNO_FALHA, MEUMED_RETORNO_SUCESSO } from "../../actions/medicos/MeusMedicosAction";
import { MensagemInformativa } from "../../components/mensagens/Mensagens";
import { RETORNO_SUCESSO, RETORNO_SERVER_INDISPONIVEL } from "../../constants/ConstantesInternas";
import ClinicaServico from '../../servicos/ClinicaServico';
import MedicosServico from "../../servicos/MedicosServico";

export function* recuperarMedicos(action){
    yield put({type: MEUMED_INICIANDO});
    try {
        const retorno = yield call(MedicosServico.recuperarMedicos);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: MEUMED_RETORNO_SUCESSO,  listaMedicos: retorno.data.retorno});
        } else {
            yield put({type: MEUMED_RETORNO_FALHA, mensagemFalha: retorno.mensagemErro});
            if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
                MensagemInformativa(retorno.mensagemErro);
            }
            console.log('falha na busca dos médicos')
        }
    } catch(error){
        yield put({type: MEUMED_RETORNO_FALHA, mensagemFalha: error});
    }
}

export function* desvincularMedico(action){
    yield put({type: MEUMED_INICIANDO});
    try {
        const retorno = yield call(MedicosServico.desvincularMedico, action.medico);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: MEUMED_DESVINCULAR_SUCESSO, idMedico: action.medico.idMedico});
            MensagemInformativa('Médico desvinculado da sua lista com sucesso!');
        } else {
            yield put({type: MEUMED_DESVINCULAR_FALHA, mensagemFalha: retorno.mensagemErro, idMedico: null});
            if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
                MensagemInformativa(retorno.mensagemErro);
            }
        }
    } catch(error){

        yield put({type: MEUMED_DESVINCULAR_FALHA, mensagemFalha: error});
        MensagemInformativa(error);
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
            MensagemInformativa('Médico salvo com sucesso! Vincule clínicas na aba "Clínicas do médico" ');
        } else {
            yield put({type: CADMED_SALVO_FALHA, mensagemFalha: retorno.mensagemErro});
            if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
                MensagemInformativa(retorno.mensagemErro);
            }
        }
    } catch(error){
        yield put({type: CADMED_SALVO_FALHA, mensagemFalha: error});
    }
}

export function* buscarEspecialidades(action){
    yield put({type: CADMED_ESPECIALIDADE_INICIA});
    try {
        const retorno = yield call(MedicosServico.obterEspecialidades);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: CADMED_ESPECIALIDADE_SUCESSO, listaEspecialidades: retorno.data.retorno});
        } else {
            yield put({type: CADMED_ESPECIALIDADE_FALHA, mensagemFalha: retorno.menagemErro});
            if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
                MensagemInformativa(retorno.mensagemErro);
            }
        }
    } catch(error){
        yield put({type: CADMED_ESPECIALIDADE_FALHA, mensagemFalha: error});
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
            if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
                MensagemInformativa(retorno.mensagemErro);
            }
        }
    } catch(error){
        yield put({type: MEUMED_EDITAR_MEDICO_FALHA, mensagemFalha: error});
    }    
}

export function* desvincularClinica(action){
    yield put({type: CADCLI_VINCULO_DESVINCULO_INICIA});
    try {
        const retorno = yield call(ClinicaServico.desvincularClinicaMedico, action.codClinica, action.codMedico);
        if (retorno.status === RETORNO_SUCESSO){
            yield put({type: CADCLI_VINCULO_DESVINCULO_SUCESSO, codClinicaDesvinculada: action.codClinica});
            MensagemInformativa('Clínica desvinculada com sucesso');
        } else {
            yield put({type: CADCLI_VINCULO_DESVINCULO_FALHA, mensagemFalha: retorno.mensagemErro});
            if (retorno.status != RETORNO_SERVER_INDISPONIVEL){
                MensagemInformativa(retorno.mensagemErro);
            }
                   console.log('Erro retorno')
        }
    } catch(error){
        yield put({type: CADCLI_VINCULO_DESVINCULO_FALHA, mensagemFalha: error});
    }
}