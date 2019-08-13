import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import { setLocale } from '../../actions'

import {FormattedMessage} from 'react-intl'

import classNames from 'classnames';

import { ReactComponent as FacebookIcon} from '../common/icons/facebook.svg'
import { ReactComponent as InstagramIcon} from '../common/icons/instagram.svg'
import { ReactComponent as MenuOpened} from '../common/icons/menuOpened.svg'
import { ReactComponent as MenuClosed} from '../common/icons/menuClosed.svg'
import headerLogo from '../common/logos/archikon_logo_black.png'

import './menu.scss'

import { Link, withRouter } from 'react-router-dom'

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
        list: [],
        isMenuOpened: false
    };
  }

  changeLanguage = () => {
    const {language} = this.props
    const chosenLanguage = (language.lang==='hu') ? 'en' : 'hu';
    this.props.setLocale(chosenLanguage);
  };

  changeMenuState = () => {
    const {isMenuOpened} = this.state;

    this.setState({
      isMenuOpened: !isMenuOpened
    })
  };

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.projects !== prevState.projects) {
        return { list: nextProps.externalList };
    }
    else return null; // Triggers no change in the state
  }

  render() {
    const {language, location} = this.props;
    const {isMenuOpened} = this.state;


    return (
      <div className={classNames('menu',{'menu-closed' : !isMenuOpened  },{'main-page': (location.pathname==='/')})}>
        <div className={classNames('menu-button',{'menu-open' : !isMenuOpened})} onClick={() => this.changeMenuState()}>
                 {(!isMenuOpened) ? <MenuOpened/> : <MenuClosed/>}
        </div>
        <div className="fake-header">
          <div className={classNames('header-logo-wrapper',{'opened' : !isMenuOpened})} >
           {(location.pathname==='/') && <img className="header-logo" src={headerLogo}  alt="Archikon Architects Logo"/>}
          </div>
        </div>
        {isMenuOpened && (
        <Fragment>
        <div className="menu-wrapper">
          <div className="logo-wrapper">
            <Link to="/">
              Archikon Architects
            </Link>
          </div>
          <div className="line-wrapper">
            <div className="line"> 
            </div>
          </div>
          <div className="menu-item-wrapper">
            <div className="menu-items">
            
                  <div className={classNames('menu-item', { 'activated': (location.pathname==='/') ? true : false})}>
                    <Link to="/">
                      <FormattedMessage id="menu_home"> </FormattedMessage>
                    </Link>
                  </div>
                  <div className={classNames('menu-item', { 'activated': (location.pathname==='/projects') ? true : false})}>
                    <Link to="/projects">
                      <FormattedMessage id="menu_projects"> </FormattedMessage>
                    </Link>
                  </div>
                  <div className={classNames('menu-item', { 'activated': (location.pathname==='/office') ? true : false})}>
                    <Link to="/office">
                      <FormattedMessage id="menu_office"> </FormattedMessage>
                    </Link>
                  </div>
                  <div className={classNames('menu-item', { 'activated': (location.pathname==='/contact') ? true : false})}>
                    <Link to="/contact">
                      <FormattedMessage id="menu_contact"> </FormattedMessage>
                    </Link>
                  </div>
                  <div className="icons-wrapper">
                      <div className="icon-item">
                        <a href="https://www.facebook.com/Archikon/">
                          <FacebookIcon/>
                        </a>
                      </div>
                      <div className="icon-item">
                      <a href="https://www.facebook.com/Archikon/">
                          <InstagramIcon/>
                        </a>
                      </div>
                    <div className="icon-item language" onClick={()=>this.changeLanguage()}>
                        {language.lang}
                    </div>
                  </div>
             
            </div>
          </div>
        </div>
        </Fragment>
        )}
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setLocale: (lang) => dispatch(setLocale(lang))
  };
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    language: state.localization
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));
