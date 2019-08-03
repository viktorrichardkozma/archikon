import React, {Component} from 'react';

//REDUX
import {Provider} from 'react-redux';
import store from './store'; 
import { connect } from 'react-redux';


//LOCALIZATION
import {addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import hu from 'react-intl/locale-data/hu'
import {localeSet} from './actions/actions'
import messages from './messages'
import {IntlProvider} from 'react-intl';


//STYLESHEET
import './App.scss';

//LOCALIZATION INIT
addLocaleData(en)
addLocaleData(hu)



store.dispatch(localeSet('hu'))



class App extends Component {

  render(){
    const {lang} = this.props;

    return (
      <Provider store={store}>
        <IntlProvider locale={lang} messages={messages[lang]}>
          <div className="App">
            cica

          </div>
        </IntlProvider>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.locale.lang
});

export default connect(mapStateToProps,{})(App);
