import PropTypes from 'prop-types';
import React, {Component} from 'react';

import { connect } from 'react-redux';

import './square-view.scss'


//Action

class SquareView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        list: []
    };
  }

  render() {
    const {data} = this.props
    console.log(data)

    return (
    <div class="square">
        <div class="square-inner" style={{ backgroundImage : data.img}}>
          
          <div class="square-inner-content">
            <div class="name">
                {data.name}
            </div>
            <br/>
            <div class="location">
                {data.location}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (SquareView);
