export const LISTAR_CLINICAS_MEDICO = "buscaMeusMedicos";
export const SALVAR_MEDICO = "vinculaMedicos";
export const DESVINCULAR_CLINICA = "desvinculaMedico";

export const INTERNET_INOPERANTE ="internetInoperante";
export const CHANGE_FIELD = "CHANGE_FIELD";

export const INICIANDO = "startingMedicos";

export const BUSCA_LISTA_SUCESSO = "sucessoMedicos";
export const BUSCA_LISTA_FALHA = "falhaMedicos";

export const SALVAR_MEDICO_SUCESSO = "sucessoMedicos";
export const SALVAR_MEDICO_FALHA = "falhaMedicos";


export const buscarMeusMedicos = () =>({
    type: BUSCAR_MEDICOS
});

export const vinculaMedicos = (medico) =>({
    type: SALVAR_MEDICOS, medico
});

export const desvinculaMedico = (medico) =>({
    type: DESVINCULAR_MEDICO, medico
});

export const onChangeField = (fieldName, value) => ({
    type: CHANGE_FIELD,
    fieldName, value
})