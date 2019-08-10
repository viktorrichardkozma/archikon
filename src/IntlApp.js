import React, {Component} from 'react';

//REDUX
import store from './store'; 
import { connect } from 'react-redux';

//LOCALIZATION
import {addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import hu from 'react-intl/locale-data/hu'
import messages from './messages'
import {IntlProvider} from 'react-intl';
import Menu from './components/menu'
import Content from './components/content'

import {localeSet} from './actions'

//ROUTING
import {Router} from 'react-router-dom'
import { createBrowserHistory } from 'history'

//STYLESHEET
import './App.scss';

//LOCALIZATION INIT
addLocaleData(en)
addLocaleData(hu)

if(localStorage.alhub) 
{ 
  store.dispatch(localeSet(localStorage.alhubLang))
} else {
  store.dispatch(localeSet('hu'))
}

class IntlApp extends Component {

  render(){
    const {lang} = this.props;

    let history = createBrowserHistory()

    return (
      <Router history={history}>     
        <IntlProvider locale={lang} messages={messages[lang]}>
          <div className="App">
            <Menu/>
            <Content/>
          </div>
        </IntlProvider>
      </Router>     
    );
  }
}

const mapStateToProps = state => ({
  lang: state.localization.lang
});


export default connect(mapStateToProps,{})(IntlApp);
