export const BUSMED_CHANGE_FIELD = "CHANGE_FIELD";
export const BUSMED_CONSULTAR_MEDICOS = "BUSCAR_MEDICOS";

export const BUSMED_INICIANDO = "INICIANDO_BUSCA";

export const BUSMED_CONSULTA_SUCESSO = "FINALIZANDO_BUSCA_SUCESSO";
export const BUSMED_CONSULTA_FALHA = "FINALIZANDO_BUSCA_FALHA";

export const onChangeField = (fieldName, value) => ({
    type: BUSMED_CHANGE_FIELD,
    fieldName, value
})

export const buscaPorMedico = (nomeMedico, numCrm) => ({
    type: BUSMED_CONSULTAR_MEDICOS,
    nomeMedico, numCrm
})

