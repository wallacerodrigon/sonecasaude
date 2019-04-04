export const MEUMED_CHANGE_FIELD = "MEUMED_CHANGE_FIELD";
export const MEUMED_CONSULTAR = "MEUMED_CONSULTAR";
export const MEUMED_INICIANDO = "MEUMED_INICIANDO";
export const MEUMED_DESVINCULAR = "MEUMED_DESVINCULAR";
export const MEUMED_VINCULAR = "MEUMED_VINCULAR";

export const MEUMED_DESVINCULAR_SUCESSO = "MEUMED_DESVINCULAR_SUCESSO";
export const MEUMED_DESVINCULAR_FALHA = "MEUMED_DESVINCULAR_FALHA";

export const MEUMED_SALVAR = "MEUMED_SALVAR";
export const MEUMED_SALVO_SUCESSO = "MEUMED_SALVO_SUCESSO";

export const MEUMED_RETORNO_SUCESSO = "MEUMED_RETORNO_SUCESSO";
export const MEUMED_RETORNO_FALHA = "MEUMED_RETORNO_FALHA";

export const MEUMED_EDITAR_MEDICO_INICIA = "MEUMED_EDITAR_MEDICO_INICIA";
export const MEUMED_EDITAR_MEDICO = "MEUMED_EDITAR_MEDICO";
export const MEUMED_EDITAR_MEDICO_SUCESSO = "MEUMED_EDITAR_MEDICO_SUCESSO";
export const MEUMED_EDITAR_MEDICO_FALHA = "MEUMED_EDITAR_MEDICO_FALHA";


export const buscarMeusMedicos = () =>({
    type: MEUMED_CONSULTAR
});

export const desvinculaMedico = (medico) =>({
    type: MEUMED_DESVINCULAR, medico
});

export const onChangeField = (fieldName, value) => ({
    type: MEUMED_CHANGE_FIELD,
    fieldName, value
})

export const vinculaMedicoLocal = (medico) =>({
    type: MEUMED_VINCULAR, medico
});

export const buscarMedicoEdicao = (codMedico) => ({
    type: MEUMED_EDITAR_MEDICO, 
    codMedico
})