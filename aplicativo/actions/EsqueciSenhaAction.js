export const RECSEN_RECUPERAR = "RECSEN_RECUPERAR";
export const RECSEN_CHANGE_FIELD = "RECSEN_CHANGE_FIELD";
export const RECSEN_INTERNET_INOPERANTE ="RECSEN_INTERNET_INOPERANTE";
export const RECSEN_START_RECUPERACAO ="RECSEN_START_RECUPERACAO";
export const RECSEN_END_RECUPERACAO = "RECSEN_END_RECUPERACAO";
export const RECSEN_ERRO_INESPERADO = "RECSEN_ERRO_INESPERADO";

export const recuperarSenha =(email) => ({
    type: RECSEN_RECUPERAR,
    email
});
    
export const onChangeEmail = (value) => ({
    type: RECSEN_CHANGE_FIELD, 
    value
})

export const erroInesperado = (mensagem) => ({
    type: RECSEN_ERRO_INESPERADO, 
    mensagem
})
