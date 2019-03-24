export const EFETUAR_LOGIN ="efetuarLogin";
export const CHANGE_FIELD = "onChangeField";

export const BUSCA_GRAUS_PARENTESCO = "buscaGrauParentesco";


export const LOGIN_SUCESSO = "loginSucesso";
export const LOGIN_FALHA = "loginFalha";

export const LOGIN_START ="startLogin";

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

