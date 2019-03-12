import { 
    CADASTRO_DADOS_PESSOAIS, 
    CADASTRO_ENDERECO,
    CADASTRO_DESAFIOS,
    CADASTRO_COMPARTILHAMENTO,
    FINALIZA_CADASTRO,
    DADOS_PESSOAIS_INVALIDOS,
    DADOS_ENDERECOS_INVALIDOS,
    DADOS_COMPARTILHAMENTO_INVALIDOS,
    DADOS_FINALIZACAO_INVALIDOS,
    CHANGE_FIELD
} from "../actions";


import axios  from "axios";

const INITIAL_STATE = {nome: ''}
    


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_FIELD: {
            return onChangeField(state, action.field, action.value);
        }
    }

}

const onChangeField = (state, fieldName, valor)=> {
    let newState = {...state};
    newState[fieldName] = valor;
    return newState;
}