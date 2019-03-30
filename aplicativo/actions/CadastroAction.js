export const CADUSU_SUCESSO = "CADUSU_SUCESSO";
export const CADUSU_FALHA = "CADUSU_FALHA";
export const CADUSU_CADASTRAR_USUARIO = "CADUSU_CADASTRAR_USUARIO";

export const CADUSU_CHANGE_FIELD = "CADUSU_CHANGE_FIELD";
export const CADUSU_TOGGLE_FIELD = "CADUSU_TOGGLE_FIELD";

export const CADUSU_BUSCA_CEP = "CADUSU_BUSCA_CEP";
export const CADUSU_BUSCA_CEP_SUCESSO = "CADUSU_BUSCA_CEP_SUCESSO";
export const CADUSU_BUSCA_CEP_FALHA = "CADUSU_BUSCA_CEP_FALHA";
export const CADUSU_INICIA_BUSCA_CEP = "CADUSU_INICIA_BUSCA_CEP";

export const CADUSU_START_CADASTRO ="CADUSU_START_CADASTRO";
export const CADUSU_END_CADASTRO ="CADUSU_END_CADASTRO";  

export const CADUSU_INTERNET_INOPERANTE = "CADUSU_INTERNET_INOPERANTE"; //deixar genérico

export const CADUSU_VERIFICA_CPF = "CADUSU_VERIFICA_CPF";
export const CADUSU_VERIFICA_CPF_SUCESSO = "CADUSU_VERIFICA_CPF_SUCESSO";
export const CADUSU_VERIFICA_CPF_FALHA = "CADUSU_VERIFICA_CPF_FALHA";


export const cadastrarUsuario = (user) => ({
    type: CADUSU_CADASTRAR_USUARIO,
    user
});

export const onChangeField = (fieldName, value) => ({
    type: CADUSU_CHANGE_FIELD, 
    fieldName,
    value
})

export const onToggleField = (fieldName) => ({
    type: CADUSU_TOGGLE_FIELD,
    fieldName
})

export const buscarCep = (numCep) => ({
    type: CADUSU_BUSCA_CEP,
    numCep   
})

export const verificarCadastro = numCpf => ({
    type: CADUSU_VERIFICA_CPF,
    numCpf
})