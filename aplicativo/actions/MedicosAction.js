export const BUSCAR_MEDICOS = "buscaMeusMedicos";
export const SALVAR_MEDICOS = "vinculaMedicos";
export const DESVINCULAR_MEDICO = "desvinculaMedico";
export const INTERNET_INOPERANTE ="internetInoperante";
export const CHANGE_FIELD = "CHANGE_FIELD";

export const INICIANDO = "startingMedicos";

export const FINALIZANDO_BUSCA_SUCESSO = "sucessoMedicos";
export const FINALIZANDO_BUSCA_FALHA = "falhaMedicos";

export const FINALIZANDO_DESVINCULO = "finalizaDesvinculo";

export const buscarMeusMedicos = () =>({
    type: BUSCAR_MEDICOS
});

export const vinculaMedicos = (medico) =>({
    type: SALVAR_MEDICOS, medico
});

export const desvinculaMedico = (medico) =>({
    type: DESVINCULAR_MEDICO, medico
});