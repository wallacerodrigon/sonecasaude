import React from 'react';
import SwitchNavigator from './navigators/SwitchNavigator';
import { createStore, applyMiddleware } from 'redux';  //forma de incluir um middlewareno projeto
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/";
import sagas from "./sagas/";
import { AppState } from "react-native";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export default class App extends React.Component {

  componentDidMount(){
    console.disableYellowBox = true;    
    AppState.addEventListener('change', this.mostraState);
  }

  mostraState(){
   // alert('mostra:' + AppState.currentState);
  }

  componentWillUnmount(){
    //alert('unmount:' +AppState.currentState);
  }

  encaminharRota(){
    //const usuarioLogado = getValoresStorage('usuario');
    // if (usuarioLogado != null){
    //   console.log('logado');
    //   return <NavigatorLoggedIn {...super.props}/>
    // } else {
      return <SwitchNavigator/>
    // }

  }

  render() {

    return (
       <Provider store={store}>
          {this.encaminharRota()}
        
      </Provider>
    )
  }
}
 