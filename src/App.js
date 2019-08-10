import React, {Component} from 'react';
import IntlApp from './IntlApp'
import {Provider} from 'react-redux';
import store from './store'; 

//STYLESHEET
import './App.scss';

class App extends Component {
  render(){
    return (
        <Provider store={store}>
            <IntlApp/>
        </Provider>
    );
  }
}

export default App
