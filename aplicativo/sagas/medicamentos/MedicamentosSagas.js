import { call, put } from 'redux-saga/effects';
import MedicamentoServico from "../../servicos/MedicamentoServico";
import { CADREM_BUSCA_MEDICAMENTOS_FIM, CADREM_BUSCA_MEDICAMENTOS_INI, CADREM_BUSCA_DETALHES_MEDICAMENTOS_INI, 
    CADREM_BUSCA_DETALHES_MEDICAMENTOS_FIM } from '../../actions/medicamentos/MedicamentosAction';
import { RETORNO_SUCESSO } from '../../constants/ConstantesInternas';

export function* listarMedicamentos(action){

    yield put({type: CADREM_BUSCA_MEDICAMENTOS_INI});

    const retorno = yield call(MedicamentoServico.listarMedicamentos, action.nome);

    try {
        if (retorno.status == RETORNO_SUCESSO){
            let listaMedicamentos = retorno.data.retorno == null ? [] : retorno.data.retorno;
            yield put({type: CADREM_BUSCA_MEDICAMENTOS_FIM, listaMedicamentos });
        } else {
            yield put({type: CADREM_BUSCA_MEDICAMENTOS_FIM, mensagemFalha: retorno.mensagemErro});
        }
    } catch(erro){
        yield put({type: CADREM_BUSCA_MEDICAMENTOS_FIM, mensagemFalha: erro});

    }

}


export function* listarDetalhesMedicamentos(action){
    yield put({type: CADREM_BUSCA_DETALHES_MEDICAMENTOS_INI}); 
    
    const retorno = yield call(MedicamentoServico.listarDetalhesMedicamentos, action.codMedicamento);

    try {
        if (retorno.status == RETORNO_SUCESSO){
            yield put({type: CADREM_BUSCA_DETALHES_MEDICAMENTOS_FIM, listaDetalhesMedicamentos: retorno.data.retorno});
        } else {
            yield put({type: CADREM_BUSCA_DETALHES_MEDICAMENTOS_FIM, mensagemFalha: retorno.mensagemErro});
        }
    } catch(erro){
        yield put({type: CADREM_BUSCA_DETALHES_MEDICAMENTOS_FIM, mensagemFalha: erro});

    }    
}