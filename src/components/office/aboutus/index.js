import React, {Component} from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import headerLogo from '../../common/logos/archikon_logo_black.png'
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
    const {visible, language} = this.props
    const {about, isLoading}= this.state;

    return (visible===true) ? ((about && isLoading!==true) ? (
      (language.lang==='hu') ?
      (<div className="office-decription-wrapper">
        {renderHTML(about[0].info_hu)}
        </div>) : (<div className="office-decription-wrapper">
        {renderHTML(about[0].info_en)}
        </div>)) :
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
    language: state.localization
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAbout: () => dispatch(fetchingAbout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
