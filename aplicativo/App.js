import React from 'react';
import SwitchNavigator from './navigators/SwitchNavigator';
import { createStore, applyMiddleware } from 'redux';  //forma de incluir um middlewareno projeto
import { Provider } from 'react-redux';
import ReduxThunk from "redux-thunk";

import rootReducer from "./reducers/";

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

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
 