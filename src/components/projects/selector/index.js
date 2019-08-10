import PropTypes from 'prop-types';
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

  render() {
    const {viewMode} = this.props;

    return (
      <div className="project-listing-selector">
        <div className="option-wrapper">
          <div onClick={() => this.changeView('selected')} className={classNames('option-item', 'selector', { 'activated': (viewMode==='selected') ? true : false})}>
            <FormattedMessage id="selected_view"> </FormattedMessage>
          </div>
          <div onClick={() => this.changeView('list')} className={classNames('option-item', 'selector', { 'activated': (viewMode==='list') ? true : false})}>
            <FormattedMessage id="list_view"> </FormattedMessage>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTypeSelector;
