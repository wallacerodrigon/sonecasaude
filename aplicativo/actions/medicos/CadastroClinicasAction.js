export const CADCLI_CHANGE_FIELD = "CADCLI_CHANGE_FIELD";

export const CADCLI_SALVAR_CLINICA = "CADCLI_SALVAR_CLINICA";

export const CADCLI_INICIANDO = "CADCLI_INICIANDO";
export const CADCLI_FIM_SALVAR = "CADCLI_FIM_SALVAR";

export const onChangeField = (fieldName, value) => ({
    type: CADCLI_CHANGE_FIELD,
    fieldName, value
})

