export const RECUPERAR_SENHA = "recuperarSenha";
export const CHANGE_FIELD = "changeEmail";
export const INTERNET_INOPERANTE ="internetInoperante";
export const START_RECUPERACAO ="iniciando";
export const END_RECUPERACAO = "finalizando";
export const ERRO_INESPERADO = "erroInesperado";

export const recuperarSenha =(email) => ({
    type: RECUPERAR_SENHA,
    email
});
    
export const onChangeEmail = (value) => ({
    type: CHANGE_FIELD, 
    value
})

export const erroInesperado = (mensagem) => ({
    type: ERRO_INESPERADO, 
    mensagem
})
