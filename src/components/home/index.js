import React, { Component } from 'react'
import Carousel from './carousel/'
import './home.scss'

class Home extends Component {
  
	render() {

    const data = [{
      id: 0,
      header: 'Gluten-free Bicycle',
      body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
      colour: '#242846',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc1.jpg'
    }, {
      id: 1,
      header: 'Post-ironic Disrupt',
      body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
      colour: '#ba9077',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc2.jpg'
    }, {
      id: 2,
      header: 'Lumber-Sexual Roof Party ',
      body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
      colour: '#1ABC9C',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc3.jpg'
    }];

		return (
			<section className="carousel-wrapper">
				<Carousel data={data} />
			</section>
		);
	}
}

export default Home