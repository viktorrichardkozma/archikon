import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {getMenuState, setLocale} from '../../actions'

import {FormattedMessage} from 'react-intl'

import classNames from 'classnames';

import { ReactComponent as FacebookIcon} from '../common/icons/facebook.svg'
import { ReactComponent as InstagramIcon} from '../common/icons/instagram.svg'
import './menu.scss'


import { Link, withRouter } from 'react-router-dom'

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        list: []
    };
  }

  changeLanguage = (event) => {
    const {language} = this.props
    const chosenLanguage = (language.lang==='hu') ? 'en' : 'hu';
    this.props.setLocale(chosenLanguage);
  };

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.projects !== prevState.projects) {
        return { list: nextProps.externalList };
    }
    else return null; // Triggers no change in the state
  }

  render() {
    const {language, location} = this.props;


    return (
      <div className="menu">
        <div className="menu-wrapper">
          <div className="logo-wrapper">
              Archikon Architects
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
      </div>
    );
  }
}

Permissions.propTypes = {
  listOfProjects: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMenuState: (filters) => dispatch(getMenuState(filters)),
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
