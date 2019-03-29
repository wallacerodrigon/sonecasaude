import React from 'react';
import SwitchNavigator from './navigators/SwitchNavigator';
import { createStore, applyMiddleware } from 'redux';  //forma de incluir um middlewareno projeto
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/";
import sagas from "./sagas/";
import { AppState } from "react-native";
import { TAG_USUARIO_LOGADO } from './constants/ConstantesInternas';
import { getValoresStorage } from "./components/comuns/UtilStorage";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);



export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.disableYellowBox = true;    
    //AppState.addEventListener('change', this.mostraState);
    //console.log(thinavigatorLoggedIns.props.navigation)
  }

  mostraState(){
   // alert('mostra:' + AppState.currentState);
  }

  componentWillUnmount(){
    //alert('unmount:' +AppState.currentState);
  }

  render() {
    return (
       <Provider store={store}>
          <SwitchNavigator/>
      </Provider>
    )
  }
}
 