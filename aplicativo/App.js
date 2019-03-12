import React from 'react';
import SwitchNavigator from './navigators/SwitchNavigator';
import { createStore, applyMiddleware } from 'redux';  //forma de incluir um middlewareno projeto
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/";
import sagas from "./sagas/";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export default class App extends React.Component {

  componentDidMount(){
    console.disableYellowBox = true;    
  }

  render() {

    return (
       <Provider store={store}>
          <SwitchNavigator/>
        
      </Provider>
    )
  }
}
 