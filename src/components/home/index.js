import React, { Component,Fragment} from 'react'
import Carousel from './carousel/'
import './home.scss'
import classNames from 'classnames';
import headerLogo from '../common/logos/archikon_logo_black.png'


class Home extends Component {
  
	render() {

    const data = [{
      id: 0,
      img: './carousel-item/carousel-item-2.jpg'
    }, {
      id: 1,
      img: './carousel-item/carousel-item-3.jpg'
    }, {
      id: 2,
      img: './carousel-item/carousel-item-1.jpg'
    },{
      id: 3,
      img: './carousel-item/carousel-item-4.jpg'
    }
    ];

		return (
      <Fragment>
      <div className="header-logo-wrapper">
        {<img className="header-logo" src={headerLogo}  alt="Archikon Architects Logo"/>}
      </div>

			<section className="carousel-wrapper">
				<Carousel data={data} />
			</section>
    </Fragment>
		);
	}
}

export default Home