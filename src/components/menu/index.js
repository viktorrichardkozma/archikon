import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import { setLocale } from '../../actions'

import {FormattedMessage} from 'react-intl'

import classNames from 'classnames';
import headerLogo from '../common/logos/archikon_logo_black.png'
import { ReactComponent as SvgLogo } from './archikon-logo.svg';

import { ReactComponent as FacebookIcon} from '../common/icons/facebook.svg'
import { ReactComponent as InstagramIcon} from '../common/icons/instagram.svg'
import { ReactComponent as MenuOpened} from '../common/icons/menuOpened.svg'
import { ReactComponent as MenuClosed} from '../common/icons/menuClosed.svg'

import './menu.scss'

import { withRouter } from 'react-router-dom'
import { Link } from "react-router-relative-link";

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
        list: [],
        isMenuOpened: true
    };
  }

  changeLanguage = () => {
    const { language } = this.props
    const chosenLanguage = (language.lang === 'hu') ? 'en' : 'hu';
    this.props.setLocale(chosenLanguage);
  };

  changeMenuState = () => {
    const {isMenuOpened} = this.state;

    this.setState({
      isMenuOpened: !isMenuOpened
    })

  };

  resize() {
    if (window.innerWidth <= 767){
      //SZENTSÉGESATYAURISTEN
      this.setState({
        isMenuOpened: false
      })
    } else {
      this.setState({
        isMenuOpened: true
      })
    }
  };

  changePage = () => {
    if (window.innerWidth <= 767){
      this.setState({
        isMenuOpened: false
      })
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
}


  render() {
    const {language, location} = this.props;
    const {isMenuOpened} = this.state;

    return (
      <div className={classNames('menu',{'menu-closed' : !isMenuOpened },{'main-page': (location.pathname==='/')})}>
          <div className={classNames('menu-button',{'menu-open' : !isMenuOpened})} onClick={() => this.changeMenuState()}>
                  {(!isMenuOpened) ? <MenuOpened/> : <MenuClosed/>}
          </div>

            {!(location.pathname==='/') && (<Link to="/projects-selected">
              <div className={classNames('menu-closed-logo-wrapper',{'menuClosed': isMenuOpened })} >
                {<img className="menu-logo" src={headerLogo}  alt="Archikon Architects Logo"/>}
              </div>
            </Link>)}


          <Fragment>
          <div className={classNames('menu-opened-logo-wrapper',{'menuClosed':!isMenuOpened})}>
            {<img className="header-logo" src={headerLogo}  alt="Archikon Architects Logo"/>}
          </div>

        <div className={classNames('menu-wrapper',{'menuClosed':!isMenuOpened})}>
          <div className="logo-wrapper">
            <Link to="/projects-selected">
              {/* Archikon Architects */}
              <SvgLogo style={{ height: '15px' }} />
            </Link>
          </div>
          <div className="line-wrapper">
            <div className="line">
            </div>
          </div>
          <div className="menu-item-wrapper">
            <div className="menu-items">

                  <div onClick={()=>this.changePage()} className={classNames('menu-item', { 'activated': (location.pathname==='/') ? true : false})}>
                    <Link to="/">
                      <FormattedMessage id="menu_home"> </FormattedMessage>
                    </Link>
                  </div>
                  <div onClick={()=>this.changePage()} className={classNames('menu-item', { 'activated': (location.pathname.includes('project')) ? true : false})}>
                    <Link to="/projects-selected">
                      <FormattedMessage id="menu_projects"> </FormattedMessage>
                    </Link>
                  </div>
                  <div onClick={()=>this.changePage()} className={classNames('menu-item', { 'activated': (location.pathname==='/office') ? true : false})}>
                    <Link to="/office">
                      <FormattedMessage id="menu_office"> </FormattedMessage>
                    </Link>
                  </div>
                  <div onClick={()=>this.changePage()} className={classNames('menu-item', { 'activated': (location.pathname==='/contact') ? true : false})}>
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
                      <a href="https://www.instagram.com/archikon_architects/">
                          <InstagramIcon/>
                        </a>
                      </div>
                    <div className="icon-item language" onClick={()=>this.changeLanguage()}>
                        {language.lang === 'en' ? 'hu' : 'en'}
                    </div>
                  </div>

            </div>
          </div>
        </div>
        </Fragment>

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
