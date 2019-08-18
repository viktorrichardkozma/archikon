import React from 'react';
import { connect } from 'react-redux';

import {FormattedMessage} from 'react-intl'

import classNames from 'classnames';

import './selector.scss'
import { Link, withRouter } from 'react-router-dom'

class OfficeTypeSelector extends React.Component {

  changeView = viewMode => {
    this.props.changeView(viewMode);
  };

  render() {
    const {viewMode} = this.props;

    return (
      <div className="office-view-selector">
        <div className="selector-wrapper">
          <div className="view-mode-wrapper">
            <div onClick={() => this.changeView('aboutus')} className={classNames('view-mode-item', 'selector', { 'activated': (viewMode==='aboutus') ? true : false})}>
              <FormattedMessage id="about_office"> </FormattedMessage>
            </div>
            <div onClick={() => this.changeView('people')} className={classNames('view-mode-item', 'selector', { 'activated': (viewMode==='people') ? true : false})}>
              <FormattedMessage id="people_office"> </FormattedMessage>
            </div>
            <div onClick={() => this.changeView('awards')} className={classNames('view-mode-item', 'selector', { 'activated': (viewMode==='awards') ? true : false})}>
              <FormattedMessage id="prizes_office"> </FormattedMessage>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OfficeTypeSelector;
