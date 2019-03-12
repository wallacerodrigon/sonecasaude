export const DADOS_PESSOAIS_INVALIDOS= "DADOS_PESSOAIS_INVALIDOS";
export const DADOS_ENDERECOS_INVALIDOS= "DADOS_ENDERECOS_INVALIDOS";
export const DADOS_DESAFIOS_INVALIDOS= "DADOS_DESAFIOS_INVALIDOS";
export const DADOS_COMPARTILHAMENTO_INVALIDOS= "DADOS_COMPARTILHAMENTO_INVALIDOS";
export const DADOS_FINALIZACAO_INVALIDOS= "DADOS_FINALIZACAO_INVALIDOS";

export const CADASTRO_DADOS_PESSOAIS ="cadastroDadosPessoais";
export const CADASTRO_ENDERECO ="cadastroDadosEndereco";
export const CADASTRO_DESAFIOS = "cadastroDesafios";
export const CADASTRO_COMPARTILHAMENTO = "cadastroCompartilhamento";
export const FINALIZA_CADASTRO = "finalizaCadastro";

export const cadastrarDadosPessoais = (user) => ({
    type: CADASTRO_DADOS_PESSOAIS,
    user
});

export const cadastrarDadosEndereco = (user) => ({
    type: CADASTRO_ENDERECO,
    user
});

export const cadastrarDesafios = (user) => ({
    type: CADASTRO_DESAFIOS,
    user
});

export const cadastrarCompartilhamento = (user) => ({
    type: CADASTRO_COMPARTILHAMENTO,
    user
});

export const cadastrarDadosFinais = (user) => ({
    type: FINALIZA_CADASTRO,
    user
});