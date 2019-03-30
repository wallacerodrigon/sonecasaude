import { atualizarValoresNaStorage, getValoresStorage } from "./UtilStorage";

const NOME_ROTA = 'rotaAtual';

const salvarRotaAtual= async (rota, params) => {
    atualizarValoresNaStorage("route."+NOME_ROTA, rota);

    if (params){
        atualizarValoresNaStorage("params."+NOME_ROTA, params);
    }
}


const obterUltimaRota = async () => {
    const dadosRota = await getValoresStorage("route."+NOME_ROTA);
   // const paramsRota =  await getValoresStorage("params."+NOME_ROTA);    
    return dadosRota;
}



export  {
    salvarRotaAtual, 
    obterUltimaRota
}