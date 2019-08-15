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

    return (
    <div className="square">
        <div className="square-inner" style={{
            backgroundImage :`url(${data.img})`,
            backgroundPosition: 'center',
            backgroundSize: '200px'}} >
          
          <div className="square-inner-content" >
            <div className="square-inner-content-wrapper" >
                <div className="name">
                    {data.name}
                </div>
                <br/>
                <div className="location">
                    {data.location}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (SquareView);
