export const VALIDAR = "validarPreenchimento";
export const EFETUAR_LOGIN ="efetuarLogin";
export const CHANGE_FIELD = "onChangeField";

export const BUSCA_GRAUS_PARENTESCO = "buscaGrauParentesco";

export const BUSCA_DESAFIOS = "buscaDesafio";

export const efetuarLoginAction = (user) => ({
    type: EFETUAR_LOGIN,
    user
});

export const efetuarLogoutAction = () => ({
    type: EFETUAR_LOGOUT,
    
});

export const onChangeField = (fieldName, value) => ({
    type: CHANGE_FIELD, 
    fieldName,
    value
})

export const buscarGrausParentesco=() => ({
    type: BUSCA_GRAUS_PARENTESCO
})

export const buscarDesafios=() => ({
    type: BUSCA_DESAFIOS
})