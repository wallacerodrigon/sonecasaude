export const CADASTRAR_USUARIO_SUCESSO = "cadastrarUsuarioSucesso";
export const CADASTRAR_USUARIO_FALHA = "cadastroUsuarioFalha";
export const CADASTRAR_USUARIO = "cadastroUsuario";

export const CHANGE_FIELD = "changeField";
export const CHANGE_FIELD_SHARING = "changeFieldSharing";

export const TOGGLE_FIELD = "onToggle";
export const TOGGLE_FIELD_SHARING = "onToggleSharing"

export const BUSCA_CEP = "buscaCep";
export const BUSCA_CEP_SUCESSO = "buscaCepSucesso";
export const BUSCA_CEP_FALHA = "buscaCepFalha";
export const INICIA_BUSCA_CEP = "iniciandoBuscaCep";

export const BUSCA_GRAU_PARENTESCO = "buscaGrauParentescoStorage";

export const BUSCA_DESAFIO_STORAGE = "buscaDesafioStorage";

export const START_CADASTRO ="iniciandoCadastro";  //deixar genérico
export const END_CADASTRO ="finalizandoCadastro";  //deixar genérico
export const ERRO_CADASTRO = "erroCadastro";  //deixar genérico

export const INTERNET_INOPERANTE = "erroInternet"; //deixar genérico

export const RESULT_LISTA_GRAUS_PARENTESCO = "listaGrausParentesco";
export const ERRO_RESULT_LISTA_GRAUS_PARENTESCO = "erroListaGrausParentesco";

export const VERIFICA_CADASTRO = "verificaCadastro";
export const VERIFICA_CADASTRO_SUCESSO = "existeCadastroCpf";
export const VERIFICA_CADASTRO_FALHA = "naoExisteCadastroCpf";


export const cadastrarUsuario = (user) => ({
    type: CADASTRAR_USUARIO,
    user
});

export const onChangeField = (fieldName, value) => ({
    type: CHANGE_FIELD, 
    fieldName,
    value
})

export const onChangeFieldSharing = (fieldName, value) => ({
    type: CHANGE_FIELD_SHARING, 
    fieldName,
    value
})



export const onToggleField = (fieldName) => ({
    type: TOGGLE_FIELD,
    fieldName
})

export const onToggleFieldSharing = (fieldName) => ({
    type: TOGGLE_FIELD_SHARING,
    fieldName
})

export const buscarCep = (numCep) => ({
    type: BUSCA_CEP,
    numCep   
})

export const buscarGrausParentesco=() => ({
    type: BUSCA_GRAU_PARENTESCO
})

export const buscarDesafios=() => ({
    type: BUSCA_DESAFIO_STORAGE
})

export const verificarCadastro = numCpf => ({
    type: VERIFICA_CADASTRO,
    numCpf
})