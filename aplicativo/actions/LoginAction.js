export const VALIDAR = "validarPreenchimento";
export const EFETUAR_LOGIN ="efetuarLogin";
export const EFETUAR_LOGOUT = "";


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

export const onChangeLogin = (value) => ({
    type: CHANGE_FIELD, 
    field: 'login',
    value
})

export const onChangeSenha = (value) => ({
    type: CHANGE_FIELD,
    field: 'senha', 
    value
})