import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl'

import { Link } from 'react-router-dom'

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
    <Link to={`/projects/${data.id}`}>
      <div className="square">
          <div className="square-inner" style={{
              backgroundImage :`url(${data.img})`,
              backgroundPosition: 'center',
              backgroundSize: '250px'}} >
            
            <div className="square-inner-content" >
              <div className="square-inner-content-wrapper" >
                  <div className="name">
                      {data.name}
                  </div>
                  <br/>
                  <div className="location">
                      {data.location}
                  </div>
                  <br/>
                  <Link to={`/projects/${data.id}`}>
                    <div className="button">
                        <FormattedMessage id="button_info"> </FormattedMessage>
                    </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default (SquareView);
