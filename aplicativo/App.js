import React from 'react';
import SwitchNavigator from './navigators/SwitchNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default class App extends React.Component {

  componentDidMount(){
    console.disableYellowBox = true;    
  }

  render() {
    //const store = createStore();
    return (
     // <Provider store={store}>
          <SwitchNavigator/>
        
      //</Provider>
    )
  }
}
 