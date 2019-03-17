import {AsyncStorage} from 'react-native';
import {
    call, delay
  } from 'redux-saga/effects';
import DesafiosServico from '../servicos/DesafiosServico';
import GrausParentescoServico from '../servicos/GrausParentescoServico';

export function* recuperarDesafios(){

    //const listaDesafios = yield call(DesafiosServico.recuperarDesafios);

  //  atualizarValoresNaStorage('desafios',listaDesafios );

  //  console.log(listaDesafios);
}

export function* recuperarGrausParentesco(){

   // const listaGrausParentesco = yield call(GrausParentescoServico.recuperarGrausParentesco);
   // yield call(atualizarValoresNaStorage('desafios', '[{id: 1, nome: doença 1}, {id: 2, nome: doença 2}]'));

    //console.log(listaGrausParentesco);
}

function atualizarDataCarregamento(){

}

const atualizarValoresNaStorage = async (key, valores) => {
    try {
        await AsyncStorage.setItem(key, valores);
    } catch (error) {
        console.log(error)
    }
}

const getValoresStorage = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.log(error)
    }
}