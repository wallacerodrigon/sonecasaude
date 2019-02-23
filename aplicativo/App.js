import React from 'react';
import { AppContainer } from './rotas';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default class App extends React.Component {

  render() {
    //const store = createStore();
    return (
     // <Provider store={store}>
        <AppContainer />
      //</Provider>
    )
  }
}
 