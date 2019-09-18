import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl'

import { Link } from "react-router-relative-link";

import './square-view.scss'

class SquareView extends Component {
  render() {
    return (<div className="square">
      <div className="square-inner" style={{
          backgroundImage: `url(${this.props.data.thumbnail})`,
          backgroundPosition: 'center'}} >
        <div className={`square-inner-content ${this.props.selectedID === this.props.data.id ? 'active' : ''}`} onClick={this.props.showInfo}>
              <Link to={`/projects/${this.props.data.id}`}>
          <div className='square-inner-content-wrapper'>
            <div className="name">
                {this.props.language === 'hu' ? this.props.data.name_hu : this.props.data.name_en}
            </div>
          </div>
              </Link>
        </div>
      </div>
    </div>)
  }
}

export default SquareView;
