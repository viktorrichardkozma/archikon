import React, { Component } from 'react'
import Carousel from './carousel/'
import './home.scss'
import { connect } from 'react-redux';
import Helmet from 'react-helmet'

import headerLogo from '../common/logos/archikon_logo_black.png'

import LoadingBar from '../common/loading-bar'

import {fetchingSlideshow} from '../../actions/';

class Home extends Component {

  state = {
    isLoading: this.props.isLoading,
    slideshow: this.props.slideshow
  };

  componentDidMount(){
    this.props.getSlideshow()
  }

  static getDerivedStateFromProps(props, state) {
    if (props.slideshow !== state.slideshow) {

      return {
        slideshow: props.slideshow,
        isLoading: props.isLoading
      };
    }
    if (props.language !== state.language) {
      return {
        language: props.language.lang
      };
    }
    return null;
  }

  
	render() {
    const {slideshow, isLoading, language}= this.state;

    let addedIdToImages = (slideshow) ? slideshow.map( (image, id) => {
      return {id: id, image: image.image} 
     }
    ) : null 

    let preLoadimages = (slideshow) ? slideshow.map( (image, id) => 
      <img key={id} src={image.image} alt={id} />
    ) : null 

		return (
      <div className="content-wrapper-main-page">
        <div className="preLoad" style={{display:'none'}}>
          {preLoadimages}
        </div>
      <Helmet>
        <title>{`Archikon |  ${language==="hu" ? 'Főoldal' : "Home"}`} </title>
      </Helmet>
      <div className="header-logo-wrapper">
        {<img className="header-logo" src={headerLogo} alt={"Archikon Architects Logo"}/>}
      </div>
			<section className="carousel-wrapper">
        {(isLoading===false && slideshow) ? 
				  <Carousel mainCarousel={true} hidePanel={false} data={addedIdToImages} />
          : 
          <div className="loading-wrapper">
            <LoadingBar/>
          </div>
        }
			</section>
    </div >
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSlideshow: () => dispatch(fetchingSlideshow())
  };
};

const mapStateToProps = (state) => {
  return {
    language: state.localization,
    slideshow: state.slideshow.slideshow,
    isLoading: state.slideshow.isLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
