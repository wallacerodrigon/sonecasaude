export const CADMED_CHANGE_FIELD = "CADMED_CHANGE_FIELD";
export const CADMED_BUSCAR_MEDICOS = "CADMED_BUSCAR_MEDICOS";
export const CADMED_SALVAR_MEDICOS = "CADMED_SALVAR_MEDICOS";

export const CADMED_SALVAR_CLINICA = "CADMED_SALVAR_CLINICA";
export const CADMED_DESVINCULAR_CLINICA= "CADMED_DESVINCULAR_CLINICA";

export const CADMED_INICIANDO = "CADMED_INICIANDO";

export const CADMED_BUSCA_SUCESSO = "CADMED_BUSCA_SUCESSO";
export const CADMED_BUSCA_FALHA = "CADMED_BUSCA_FALHA";

export const CADMED_FIM_DESVINCULO = "CADMED_FIM_DESVINCULO";

export const onChangeField = (fieldName, value) => ({
    type: CADMED_CHANGE_FIELD,
    fieldName, value
})

export const buscaPorMedico = (nome, numCrm) => ({
    type: CADMED_BUSCAR_MEDICOS,
    nome, numCrm
})

export const salvarMedico = (medico)=> ({
    type: CADMED_SALVAR_MEDICOS,
    medico
})

export const adicionarClinica = (clinica) => ({
    type: CADMED_SALVAR_CLINICA,
    clinica
})

export const desvincularClinica = (clinica, medico) => ({
    type: CADMED_DESVINCULAR_CLINICA,
    clinica, medico
})