export const BUSCAR_MEDICOS = "buscaMeusMedicos";
export const SALVAR_MEDICOS = "vinculaMedicos";
export const EXCLUIR_MEDICO = "desvinculaMedico";

export const INICIANDO = "startingMedicos";

export const FINALIZANDO_BUSCA_SUCESSO = "sucessoMedicos";
export const FINALIZANDO_BUSCA_FALHA = "falhaMedicos";

export const buscarMeusMedicos = (codUsuario) =>({
    type: BUSCAR_MEDICOS,
    codUsuario
});

export const vinculaMedicos = (codUsuario, dadosMedico) =>({
    type: SALVAR_MEDICOS,
    codUsuario,
    dadosMedico
});

export const desvinculaMedicos = (codUsuario, codMedico) =>({
    type: SALVAR_MEDICOS,
    codUsuario,
    codMedico
});