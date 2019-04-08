import {  CADREM_BUSCA_DETALHES_MEDICAMENTOS_INI, CADREM_BUSCA_DETALHES_MEDICAMENTOS_FIM ,
    CADREM_BUSCA_MEDICAMENTOS_CHANGE,
    CADREM_BUSCA_MEDICAMENTOS_INI, CADREM_BUSCA_MEDICAMENTOS_FIM, CADREM_FILTRA_DETALHE_MEDICAMENTOS

} from "../../actions/medicamentos/MedicamentosAction";

import { alterarState } from "../FuncoesGenericas";

const INITIAL_STATE = {
    nomeMedicamento: '', nomeDetalhe: '',
    mensagemFalha: '', loadingBusca: false, buscaSucesso: false, loadingDetalhes: false,
    listaMedicamentos:[],
    listaDetalhesMedicamentos: [],
    listaDetalhesMedicamentosFiltrados: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){

        case CADREM_BUSCA_MEDICAMENTOS_CHANGE: {
            return alterarState(state, action.fieldName, action.value);
        }

        case CADREM_BUSCA_DETALHES_MEDICAMENTOS_INI: {
            return {
                ...state,
                loadingDetalhes: true,
                mensagemFalha: ''
            }
        }

        case CADREM_BUSCA_DETALHES_MEDICAMENTOS_FIM: {
            return {
                ...state,
                loadingDetalhes: false,
                mensagemFalha: action.mensagemFalha,
                listaDetalhesMedicamentos: action.listaDetalhesMedicamentos,
                listaDetalhesMedicamentosFiltrados: action.listaDetalhesMedicamentos 
            }
        }

        case CADREM_BUSCA_MEDICAMENTOS_INI: {
            return {
                ...state,
                loadingBusca: true
            }
        }

        case CADREM_BUSCA_MEDICAMENTOS_FIM: {
            return {
                ...state,
                loadingBusca: false,
                mensagemFalha: action.mensagemFalha,
                listaMedicamentos: action.listaMedicamentos 
            }
        }

        //TODO: rever esse método pois não está filtrando
        case CADREM_FILTRA_DETALHE_MEDICAMENTOS: {
            let listaDetalhesMedicamentosFiltrados = [];
            if (action.nomeFiltro != ''){
                console.log('filtrando...');
                listaDetalhesMedicamentosFiltrados = this.props.listaDetalhesMedicamentos.filter(detalhe => 
                        detalhe.descApresentacao.toUpperCase().indexOf(action.nomeFiltro.toUpperCase()) > -1 ||
                        detalhe.nomeLaboratorio.toUpperCase().indexOf(action.nomeFiltro.toUpperCase()) > -1 ||
                        detalhe.descTarja.toUpperCase().indexOf(action.nomeFiltro.toUpperCase()) > -1
                );
            } else {
                listaDetalhesMedicamentosFiltrados = [...this.props.listaDetalhesMedicamentos];
            }
    
            return {
                ...state,
                listaDetalhesMedicamentosFiltrados: listaDetalhesMedicamentosFiltrados
            }
        }

        default: return state;
    }
}
