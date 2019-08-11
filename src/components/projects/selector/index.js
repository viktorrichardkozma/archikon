import React from 'react';
import { connect } from 'react-redux';

import {FormattedMessage} from 'react-intl'

import classNames from 'classnames';

import './selector.scss'
import { Link, withRouter } from 'react-router-dom'

class ProjectTypeSelector extends React.Component {

  constructor(props) {
    super(props);
  }

  changeView = viewMode => {
    this.props.changeView(viewMode);
  };

  filterAdd = filter => {
    this.props.filterAdd(filter);
  };

  render() {
    const {viewMode} = this.props;

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
          {
            (viewMode==='list') ? (
              <div className="filter-wrapper">
                <div onClick={() => this.changeView('list')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  KERESŐMEZŐ
                </div>

                <div onClick={() => this.changeView('list')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="0_all"> </FormattedMessage>
                </div>

                <div onClick={() => this.changeView('list')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="1_public"> </FormattedMessage>
                </div>

                <div onClick={() => this.changeView('list')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="2_commercial"> </FormattedMessage>
                </div>

                <div onClick={() => this.changeView('list')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="3_hotel"> </FormattedMessage>
                </div>

                <div onClick={() => this.changeView('list')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="4_industrial"> </FormattedMessage>
                </div>

                <div onClick={() => this.changeView('list')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="5_heritage"> </FormattedMessage>
                </div>

                <div onClick={() => this.changeView('list')} className={classNames('filter-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
                  <FormattedMessage id="6_others"> </FormattedMessage>
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default ProjectTypeSelector;
