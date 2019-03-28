export const BUSCAR_MEDICOS = "buscaMeusMedicos";
export const SALVAR_MEDICOS = "vinculaMedicos";
export const EXCLUIR_MEDICO = "desvinculaMedico";
export const INTERNET_INOPERANTE ="internetInoperante";
export const CHANGE_FIELD = "CHANGE_FIELD";

export const INICIANDO = "startingMedicos";

export const FINALIZANDO_BUSCA_SUCESSO = "sucessoMedicos";
export const FINALIZANDO_BUSCA_FALHA = "falhaMedicos";

export const buscarMeusMedicos = () =>({
    type: BUSCAR_MEDICOS
});

export const vinculaMedicos = (medico) =>({
    type: SALVAR_MEDICOS, medico
});

export const desvinculaMedicos = (medico) =>({
    type: SALVAR_MEDICOS, medico
});