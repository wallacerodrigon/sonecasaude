import {
    all,
    call,
    put,
    select,
    takeEvery,
    takeLatest
  } from 'redux-saga/effects';
  
    
  function* obterDados(action) {
    console.log('(obterDados) Saga recebeu action:', action);
  
    try {
      // 1. emitir acao OBTER_ITEMS_REQUERIDO
      yield put({ type: 'OBTER_ITEMS_REQUERIDO' });
  
      // 2. Fazer pedido a API.obterFrutas
      const frutas = yield call(Api.obterFrutas);
  
      // 3a. SUCESSO: emite acao OBTER_ITEMS_COMPLETOU
      yield put({
        type: 'OBTER_ITEMS_COMPLETOU',
        frutas
      });
    } catch (error) {
      // 3b. ERRO: emite acao OBTER_ITEMS_FALHOU
      yield put({
        type: 'OBTER_ITEMS_FALHOU',
        erro: error
      });
    }
  }
  
//   function* adicionarItem(action) {
//     try {
//       yield put({ type: 'ADICIONAR_ITEM_REQUERIDO' });
  
//       const fruta = yield call(Api.adicionarFruta, action.nome);
  
//       yield put({
//         type: 'ADICIONAR_ITEM_COMPLETOU',
//         fruta
//       });
//     } catch(error) {
//       yield put({
//         type: 'ADICIONAR_ITEM_FALHOU',
//         erro: error
//       });
//     }
//   }
  
//   function* removerItem(action) {
//     try {
//       yield put({ type: 'REMOVER_ITEM_REQUERIDO' });
  
//       yield call(Api.removerFruta, action.id);
  
//       yield put({
//         type: 'REMOVER_ITEM_COMPLETOU',
//         id: action.id
//       });
//     } catch(error) {
//       yield put({
//         type: 'REMOVER_ITEM_FALHOU',
//         erro: error
//       });
//     }
//   }
  
//   function* limparLista(action) {
//     try {
//       yield put({ type: 'LIMPAR_LISTA_REQUERIDO' });
  
//       const frutas = yield select(state => state.frutas);
  
//       yield all(
//         frutas.map(fruta => call(Api.removerFruta, fruta.id))
//       );
  
//       yield put({ type: 'LIMPAR_LISTA_COMPLETOU' });
//     } catch(error) {
//       yield put({
//         type: 'LIMPAR_LISTA_FALHOU',
//         erro: error
//       });
  
//       yield put({
//         type: 'OBTER_ITEMS'
//       });
//     }
  
//   }
  
  function* rootSaga() {
    yield takeLatest('OBTER_ITEMS', obterDados);
  //  yield takeLatest('ADICIONAR_ITEM', adicionarItem);
 //   yield takeEvery('REMOVER_ITEM', removerItem);
 //  yield takeLatest('LIMPAR_LISTA', limparLista)
  }
  
  export default rootSaga;