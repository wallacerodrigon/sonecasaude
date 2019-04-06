export const CADCLI_CHANGE_FIELD = "CADCLI_CHANGE_FIELD";
export const CADCLI_CHANGE_FIELD_BUSCA = "CADCLI_CHANGE_FIELD_BUSCA";

export const CADCLI_SALVAR_CLINICA = "CADCLI_SALVAR_CLINICA";
export const CADCLI_ALTERAR_CLINICA = "CADCLI_ALTERAR_CLINICA";
export const CADCLI_VINCULAR_CLINICA = "CADCLI_VINCULAR_CLINICA";

export const CADCLI_BUSCA_CLINICA = "CADCLI_BUSCA_CLINICA";
export const CADCLI_BUSCA_CLINICA_INICIANDO = "CADCLI_BUSCA_CLINICA_INICIANDO";
export const CADCLI_BUSCA_CLINICA_FIM = "CADCLI_BUSCA_CLINICA_FIM";
export const CADCLI_BUSCA_CLINICA_FALHA = "CADCLI_BUSCA_CLINICA_FALHA";

export const CAD_CLI_BUSCA_CEP_INICIO = "CAD_CLI_BUSCA_CEP_INICIO";
export const CAD_CLI_BUSCA_CEP_FIM = "CAD_CLI_BUSCA_CEP_FIM";

export const CADCLI_INICIANDO = "CADCLI_INICIANDO";

export const CADCLI_SALVO_SUCESSO = "CADCLI_SALVO_SUCESSO";
export const CADCLI_SALVO_FALHA = "CADCLI_SALVO_FALHA";
export const CADCLI_SETA_CLINICA = "CADCLI_SETA_CLINICA";

export const CADCLI_VINCULO_DESVINCULO_INICIA = "CADCLI_VINCULO_DESVINCULO_INICIA";
export const CADCLI_VINCULO_DESVINCULO_FALHA = "CADCLI_VINCULO_DESVINCULO_FALHA";
export const CADCLI_VINCULO_DESVINCULO_SUCESSO = "CADCLI_VINCULO_DESVINCULO_SUCESSO";

export const onChangeField = (fieldName, value) => ({
    type: CADCLI_CHANGE_FIELD,
    fieldName, value
})

export const onChangeFieldBusca = (fieldName, value) => ({
    type: CADCLI_CHANGE_FIELD_BUSCA,
    fieldName, value
})

export const onChangeClinica = (clinica) => ({
    type: CADCLI_SETA_CLINICA,
    clinica
})

export const salvarClinica = (clinica) => ({
    type: CADCLI_SALVAR_CLINICA, clinica
})

export const alterarClinica = (clinica) => ({
    type: CADCLI_ALTERAR_CLINICA, clinica
})


export const vincularClinica = (codClinica, codMedico) => ({
    type: CADCLI_VINCULAR_CLINICA,
    codClinica, codMedico
})

export const buscarClinica = (nomeClinica) => ({
    type: CADCLI_BUSCA_CLINICA, nomeClinica
})

export const buscarEnderecoPorCep = (numCep) => ({
    type: CAD_CLI_BUSCA_CEP_INICIO, numCep
})

