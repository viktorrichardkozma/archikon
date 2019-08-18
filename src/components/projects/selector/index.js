import React, {Component} from 'react';
import { connect } from 'react-redux';

import {FormattedMessage} from 'react-intl';

import classNames from 'classnames';
import {addSearchValue, addCategoryFilter, removeCategoryFilter} from '../../../actions'

import './selector.scss'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


import search from '../../common/icons/search.svg'


class ProjectTypeSelector extends Component {


  changeView = viewMode => {
    this.props.changeView(viewMode);
  };

  handleInputChange = event => {
    const {addSearchValue} = this.props 
    addSearchValue(event.target.value.trim().toLowerCase())
  }

  isChecked = filter => this.props.filters.includes(filter)

  toggle = filter => {
    const {addCategoryFilter, removeCategoryFilter} = this.props;
    this.isChecked(filter) ? removeCategoryFilter(filter) : addCategoryFilter(filter)
  };
  
  render() {
    const {viewMode, searchvalue, filters} = this.props;
    
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
                <input value={searchvalue} type="text" style={{ backgroundImage: "url("+search+")"} } onChange={this.handleInputChange} className={classNames('filter-item', 'selector','field',{ 'activated': (viewMode==='list') ? true : false})}>
                </input>

                <div onClick={() => this.toggle('all')} className={classNames('filter-item', 'selector', { 'activated': filters.length===0 })}>
                  <FormattedMessage id="0_all"> </FormattedMessage>
                </div>

                <div onClick={() => this.toggle('public')} className={classNames('filter-item', 'selector', { 'activated': this.isChecked('public')})}>
                  <FormattedMessage id="1_public"> </FormattedMessage>
                </div>

                <div onClick={() => this.toggle('commercial')} className={classNames('filter-item', 'selector', { 'activated': this.isChecked('commercial')})}>
                  <FormattedMessage id="2_commercial"> </FormattedMessage>
                </div>

                <div onClick={() => this.toggle('hotelandres')} className={classNames('filter-item', 'selector', { 'activated': this.isChecked('hotelandres')})}>
                  <FormattedMessage id="3_hotel"> </FormattedMessage>
                </div>

                <div onClick={() => this.toggle('industrial')} className={classNames('filter-item', 'selector', { 'activated': this.isChecked('industrial')})}>
                  <FormattedMessage id="4_industrial"> </FormattedMessage>
                </div>

                <div onClick={() => this.toggle('heritage')} className={classNames('filter-item', 'selector', { 'activated': this.isChecked('heritage')})}>
                  <FormattedMessage id="5_heritage"> </FormattedMessage>
                </div>

                <div onClick={() => this.toggle('other')} className={classNames('filter-item', 'selector', { 'activated': this.isChecked('other')})}>
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
    language: state.localization,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSearchValue: (value) => dispatch(addSearchValue(value)),
    addCategoryFilter: (value) => dispatch(addCategoryFilter(value)),
    removeCategoryFilter: (value) => dispatch(removeCategoryFilter(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTypeSelector);
