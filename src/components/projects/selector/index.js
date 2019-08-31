import React, {Component} from 'react';
import { connect } from 'react-redux';

import {FormattedMessage} from 'react-intl';
import { Link } from "react-router-relative-link";

import { withRouter } from 'react-router-dom'

import classNames from 'classnames';
import {addSearchValue, addCategoryFilter, removeCategoryFilter} from '../../../actions'

import { translateCategoriesString } from '../../common/categoryTranslator';

import './selector.scss'

import search from '../../common/icons/search.svg'


class ProjectTypeSelector extends Component {
  state={
    filters: []
  }
   
  static getDerivedStateFromProps(props, state) {
   
   
    if (props.filters !== state.filters) {
      return {
        filters: props.filters
      };
    }

    return null;
  }


  handleInputChange = event => {
    const {addSearchValue} = this.props 
    addSearchValue(event.target.value.trim().toLowerCase())
  }

  isChecked = filter => this.state.filters.includes(filter)

  toggle = filter => {
    const {addCategoryFilter, removeCategoryFilter, language} = this.props;

    if (filter!=="all") {
      this.isChecked(filter) ? removeCategoryFilter(filter) : addCategoryFilter(filter)
    } else {
      addCategoryFilter(translateCategoriesString(filter, language.lang))
    }

  };
  
  render() {
    const {searchvalue, location} = this.props;
    const {filters} = this.state;
    
    return (
      <div className="project-listing-selector">
        <div className="selector-wrapper">
          <div className="view-mode-wrapper">
            <Link to={`/projects-selected`}>
              <div className={classNames('view-mode-item', 'selector', { 'activated': (location.pathname==='/projects-selected') ? true : false})}>
                <FormattedMessage id="selected_view"> </FormattedMessage>
              </div>
            </Link>
            <Link to={`/projects-listed`}>
              <div  className={classNames('view-mode-item', 'selector', { 'activated': (location.pathname==='/projects-listed')  ? true : false})}>
                <FormattedMessage id="list_view"> </FormattedMessage>
              </div>
            </Link>
          </div>
          <div>
 
          </div>
          {
            (location.pathname==='/projects-listed') ? (
              <div className="filter-wrapper">
                <input value={searchvalue} type="text" style={{ backgroundImage: "url("+search+")"} } onChange={this.handleInputChange} className={classNames('filter-item', 'selector','field',{ 'activated': (location.pathname==='/projects-listed')? true : false})}>
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
    language: state.localization
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSearchValue: (value) => dispatch(addSearchValue(value)),
    addCategoryFilter: (value) => dispatch(addCategoryFilter(value)),
    removeCategoryFilter: (value) => dispatch(removeCategoryFilter(value))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectTypeSelector));
