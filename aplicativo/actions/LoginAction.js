export const VALIDAR = "validarPreenchimento";
export const EFETUAR_LOGIN ="efetuarLogin";
export const CHANGE_FIELD = "onChangeField";

export const efetuarLoginAction = (user) => ({
    type: EFETUAR_LOGIN,
    user
});

export const efetuarLogoutAction = () => ({
    type: EFETUAR_LOGOUT,
    
});

export const validarLoginAction = (user) => ({
    type: VALIDAR, 
    user
})

export const onChangeField = (field, value) => ({
    type: CHANGE_FIELD, 
    field,
    value
})

