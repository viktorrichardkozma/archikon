import React, { Component } from 'react'
import Carousel from './carousel/'
import './home.scss'

class Home extends Component {
  
	render() {

    const data = [{
      id: 0,
      img: './carousel-item/carousel-item-1.jpg'
    }, {
      id: 1,
      img: './carousel-item/carousel-item-2.jpg'
    }, {
      id: 2,
      img: './carousel-item/carousel-item-3.jpg'
    }];

		return (
			<section className="carousel-wrapper">
				<Carousel data={data} />
			</section>
		);
	}
}

export default Home