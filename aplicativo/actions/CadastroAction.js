export const CADASTRAR_USUARIO_SUCESSO = "cadastrarUsuarioSucesso";
export const CADASTRAR_USUARIO_FALHA = "cadastroUsuarioFalha";
export const CADASTRAR_USUARIO = "cadastroUsuario";

export const CHANGE_FIELD = "changeField";
export const TOGGLE_FIELD = "onToggle";

export const BUSCA_CEP = "buscaCep";
export const BUSCA_CEP_SUCESSO = "buscaCepSucesso";
export const BUSCA_CEP_FALHA = "buscaCepFalha";
export const INICIA_BUSCA_CEP = "iniciandoBuscaCep";

export const BUSCA_DESAFIO = "buscaDesafio";

export const START_CADASTRO ="iniciandoCadastro";  //deixar genérico
export const END_CADASTRO ="finalizandoCadastro";  //deixar genérico
export const ERRO_CADASTRO = "erroCadastro";  //deixar genérico

export const INTERNET_INOPERANTE = "erroInternet"; //deixar genérico


export const cadastrarUsuario = (user) => ({
    type: CADASTRAR_USUARIO,
    user
});

export const onChangeField = (fieldName, value) => ({
    type: CHANGE_FIELD, 
    fieldName,
    value
})

export const onToggleField = (fieldName) => ({
    type: TOGGLE_FIELD,
    fieldName
})

export const buscarCep = (numCep) => ({
    type: BUSCA_CEP,
    numCep   
})

