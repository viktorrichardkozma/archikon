import React from 'react';
import { connect } from 'react-redux';

import {FormattedMessage} from 'react-intl';

import classNames from 'classnames';
import {addSearchValue} from '../../../actions'

import './selector.scss'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class ProjectTypeSelector extends React.Component {


  changeView = viewMode => {
    this.props.changeView(viewMode);
  };

  handleInputChange = event => {
    const {addSearchValue} = this.props 
    addSearchValue(event.target.value)
  }

  render() {
    const {viewMode, language, searchvalue} = this.props;

    return (
      <div className="project-listing-selector">
        <div className="selector-wrapper">
          <div className="view-mode-wrapper">
            <div onClick={() => this.changeView('selected')} className={classNames('view-mode-item', 'selector', { 'activated': (viewMode==='selected') ? true : false})}>
              <FormattedMessage id="selected_view"> </FormattedMessage>
            </div>
            <div onClick={() => this.changeView('list')} className={classNames('view-mode-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
              <FormattedMessage id="list_view"> </FormattedMessage>
            </div>
          </div>
          <div>
 
          </div>
          {
            (viewMode==='list') ? (
              <div className="filter-wrapper">
                <input value={searchvalue} type="text"  onChange={this.handleInputChange} className={classNames('filter-item', 'selector','field',{ 'activated': (viewMode==='list') ? true : false})}>
                </input>

                <div onClick={() => this.filterAdd('none')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="0_all"> </FormattedMessage>
                </div>

                <div onClick={() => this.filterAdd('public')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="1_public"> </FormattedMessage>
                </div>

                <div onClick={() => this.filterAdd('commercial')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="2_commercial"> </FormattedMessage>
                </div>

                <div onClick={() => this.filterAdd('hotel')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="3_hotel"> </FormattedMessage>
                </div>

                <div onClick={() => this.filterAdd('industrial')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="4_industrial"> </FormattedMessage>
                </div>

                <div onClick={() => this.filterAdd('heritage')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="5_heritage"> </FormattedMessage>
                </div>

                <div onClick={() => this.filterAdd('other')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="6_other"> </FormattedMessage>
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    filters: state.project.filters,
    searchvalue: state.project.searchvalue,
    language: state.localization
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSearchValue: (value) => dispatch(addSearchValue(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTypeSelector);
