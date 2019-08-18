import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl'

import { Link } from 'react-router-dom'

import './square-view.scss'

//Action

const SquareView = (props) => {
  return <Link to={`/projects/${props.data.id}`}>
      <div className="square">
          <div className="square-inner" style={{
              backgroundImage :`url(${props.data.thumbnail})`,
              backgroundPosition: 'center',
              backgroundSize: '300px'}} >
            
            <div className="square-inner-content" >
              <div className="square-inner-content-wrapper" >
                  <div className="name">
                      {(props.language==='hu') ? props.data.name_hu : props.data.name_en}

                  </div>
                  <br/>
                  <div className="location">
                    {(props.language==='hu') ? props.data.location_hu : props.data.location_en}

                  </div>
                  <br/>
                  <Link to={`/projects/${props.data.id}`}>
                    <div className="button">
                        <FormattedMessage id="button_info"> </FormattedMessage>
                    </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
 
}

export default (SquareView);
