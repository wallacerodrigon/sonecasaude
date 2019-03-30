export const LOGIN_EFETUAR_LOGIN ="LOGIN_EFETUAR_LOGIN";
export const LOGIN_CHANGE_FIELD = "LOGIN_CHANGE_FIELD";

export const LOGIN_SUCESSO = "LOGIN_SUCESSO";
export const LOGIN_FALHA = "LOGIN_FALHA";

export const LOGIN_START ="LOGIN_START";

export const efetuarLoginAction = (user) => ({
    type: LOGIN_EFETUAR_LOGIN,
    user
});

export const onChangeField = (fieldName, value) => ({
    type: LOGIN_CHANGE_FIELD, 
    fieldName,
    value
})

