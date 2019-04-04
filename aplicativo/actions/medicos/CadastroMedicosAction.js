export const CADMED_CHANGE_FIELD = "CADMED_CHANGE_FIELD";
export const CADMED_BUSCAR_ESPECIALIDADES = "CADMED_BUSCAR_ESPECIALIDADES";
export const CADMED_SALVAR_MEDICOS = "CADMED_SALVAR_MEDICOS";

export const CADMED_INICIANDO = "CADMED_INICIANDO";
export const CADMED_RESET = "CADMED_RESET";

export const CADMED_SALVO_SUCESSO = "CADMED_SALVO_SUCESSO";
export const CADMED_SALVO_FALHA = "CADMED_SALVO_FALHA";

export const CADMED_ESPECIALIDADE_INICIA = "CADMED_ESPECIALIDADE_INICIA";
export const CADMED_ESPECIALIDADE_SUCESSO = "CADMED_ESPECIALIDADE_SUCESSO";
export const CADMED_ESPECIALIDADE_FALHA = "CADMED_ESPECIALIDADE_FALHA";

export const CADMED_VINCULO_DESVINCULO_SUCESSO = "CADMED_VINCULO_DESVINCULO_SUCESSO";
export const CADMED_VINCULO_DESVINCULO_FALHA = "CADMED_VINCULO_DESVINCULO_FALHA";
export const CADMED_DESVINCULAR_CLINICA = "CADMED_DESVINCULAR_CLINICA";

export const onChangeField = (fieldName, value) => ({
    type: CADMED_CHANGE_FIELD,
    fieldName, value
})

export const salvarMedico = (medico)=> ({
    type: CADMED_SALVAR_MEDICOS,
    medico
})


export const buscarEspecialidades = () => ({
    type: CADMED_BUSCAR_ESPECIALIDADES
})

export const resetarDados = () => ({
    type: CADMED_RESET
})

export const desvincularClinica = (codClinica, codMedico) => ({
    type: CADMED_DESVINCULAR_CLINICA,
    codClinica, codMedico
})

