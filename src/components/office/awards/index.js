import React, {Component} from 'react';

import { connect } from 'react-redux';

import {fetchingAwards} from '../../../actions/';


import LoadingBar from '../../common/loading-bar'


class Awards extends Component {

  state = {
    isLoading: this.props.isLoading,
    awards: this.props.awards
  };

  componentDidMount(){
    this.props.getAwards()
  }

  static getDerivedStateFromProps(props, state) {
    if (props.awards !== state.awards) {
      return {
        awards: props.awards,
        isLoading: props.isLoading
      };
    }
    return null;
  }
  render() {
    const {awards, isLoading}= this.state;
    const {language} = this.props;

    return (this.props.visible===true) ?
    (
      (isLoading===false && awards) ? (
      <div>
      {awards.map(award =>
        <div>
          <p>
          {`${award.year} | `}
            <a href={award.link}>
            <b> {language.lang==="hu" ? award.name_hu : award.name_en}   </b>
            </a> {`| ${language.lang==="hu" ? award.subtitle_hu : award.subtitle_en}`}         
          </p> 
        </div> 
      )}
    </div>) : <LoadingBar/>
    ) : null 
  }
}

const mapStateToProps = (state) => {
  return {
    awards: state.awards.awards,
    isLoading: state.awards.isLoading,
    language: state.localization
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAwards: () => dispatch(fetchingAwards())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Awards);
