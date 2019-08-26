import React, {Component} from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import LoadingBar from '../../common/loading-bar'


import './aboutus.scss'
import { fetchingAbout } from '../../../actions';

//Action

class AboutUs extends Component {

  state = {
    isLoading: this.props.isLoading,
    about: this.props.about
  };

  componentDidMount(){
    this.props.getAbout()
  }

  static getDerivedStateFromProps(props, state) {
    if (props.about !== state.about) {
      return {
        about: props.about,
        isLoading: props.isLoading
      };
    }
    return null;
  }

  render() {
    const {isVisible, language} = this.props
    const {about, isLoading} = this.state;

    return (isVisible) ? 
      (
        (about && !isLoading) ? (
          <div className="office-decription-wrapper">
            {
              renderHTML( language==='hu' ? about[0].info_hu : about[0].info_en )
            }
          </div>
        ) :
          <div className="loading-wrapper">
            <LoadingBar/>
          </div>
      ) : null
  }
}

const mapStateToProps = (state) => {
  return {
    about: state.about.about,
    isLoading: state.about.isLoading,
    language: state.localization.lang
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAbout: () => dispatch(fetchingAbout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
