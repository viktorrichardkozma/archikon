import React from 'react';
import {FormattedMessage} from 'react-intl'

import { Link } from "react-router-relative-link";

import './square-view.scss'

//Action

const SquareView = (props) => {
  return  <div className="square">
          <Link to={`/projects/${props.data.id}`}>
          <div className="square-inner" style={{
              backgroundImage: `url(${props.data.thumbnail})`,
              backgroundPosition: 'center'}} >
            <div className="square-inner-content" >
              <div className="square-inner-content-wrapper" >
                  <div className="name">
                    {(props.language==='hu') ? props.data.name_hu : props.data.name_en}
                    <Link to={`/projects/${props.data.id}`}>
                      <div className="button">
                          <FormattedMessage id="button_info"></FormattedMessage>
                      </div>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
          </Link>

        </div>


}

export default (SquareView);
