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
import { createBrowserHistory } from 'history'
import { BrowserRouter } from "react-router-dom";


//STYLESHEET
import './App.scss';

//LOCALIZATION INIT
addLocaleData(en)
addLocaleData(hu)


if(localStorage.alhubLang)
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
      <BrowserRouter history={history}>
        <IntlProvider locale={lang} messages={messages[lang]}>
          <div className="App">
            <Menu/>
            <Content/>
            {/* <Footer/> */}
          </div>
        </IntlProvider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.localization.lang
});


export default connect(mapStateToProps,{})(IntlApp);
