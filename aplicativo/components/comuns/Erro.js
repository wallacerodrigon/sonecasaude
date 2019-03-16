export default class Erro {

    static getDetalhesErro(error){
        let {codErro, mensagemErro } = error.response.data;
        return {
            status: codErro,
            mensagemErro
        }
    }

}