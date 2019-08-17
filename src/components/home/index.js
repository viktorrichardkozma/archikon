import React, { Component,Fragment} from 'react'
import Carousel from './carousel/'
import './home.scss'
import classNames from 'classnames';
import { connect } from 'react-redux';

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
    return null;
  }

  
	render() {
    const {slideshow, isLoading}= this.state;

		return (
      <Fragment>
      <div className="header-logo-wrapper">
        {<img className="header-logo" src={headerLogo}  alt="Archikon Architects Logo"/>}
      </div>
			<section className="carousel-wrapper">
        {(isLoading===false && slideshow) ? 
				  <Carousel hidePanel={false} data={slideshow} />
          : 
          <div class="loading-wrapper">
            <LoadingBar/>
          </div>
        }
			</section>
    </Fragment>
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
    slideshow: state.slideshow.slideshow,
    isLoading: state.slideshow.isLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
