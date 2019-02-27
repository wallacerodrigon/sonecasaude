import React from 'react';
import GeneralNavigator from './stacks/GeneralNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default class App extends React.Component {

  render() {
    //const store = createStore();
    return (
     // <Provider store={store}>
      <GeneralNavigator/>
      //</Provider>
    )
  }
}
 