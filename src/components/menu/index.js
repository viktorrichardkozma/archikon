import PropTypes from 'prop-types';
import React from 'react';

import {FormattedMessage} from 'react-intl'

import { connect } from 'react-redux';
import { getMenuState, setLocale} from '../../actions'
import './menu.scss'
import classNames from 'classnames';

import { ReactComponent as FacebookIcon} from '../common/icons/facebook.svg'
import { ReactComponent as InstagramIcon} from '../common/icons/instagram.svg'


class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        list: []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.projects !== prevState.projects) {
        return { list: nextProps.externalList };
    }
    else return null; // Triggers no change in the state
  }

  render() {
    const {projects} = this.props
    
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
              <div className={classNames('menu-item', { 'activated': false })}>
                <FormattedMessage id="menu_home"> </FormattedMessage>
              </div>
              <div className={classNames('menu-item', { 'activated': true })}>
                <FormattedMessage id="menu_projects"> </FormattedMessage>
              </div>
              <div className={classNames('menu-item', { 'activated': false })}>
                <FormattedMessage id="menu_office"> </FormattedMessage>
              </div>
              <div className={classNames('menu-item', { 'activated': false })}>
                <FormattedMessage id="menu_contact"> </FormattedMessage>
              </div>
              <div className="icons-wrapper">
                <div className="icon-item">
                    <FacebookIcon/>
                </div>
                <div className="icon-item">
                    <InstagramIcon/>
                </div>
                <div className="icon-item" onClick={()=>this.props.setLocale('hu')}>
                    EN
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
    projects: state.projects
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
