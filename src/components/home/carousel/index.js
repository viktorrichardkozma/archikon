import React, { Component } from 'react'
import './carousel.scss'
import classNames from 'classnames'
// import carouselLogo from '../../common/logos/archikon_logo_white.png'
import { Link } from "react-router-relative-link";


class Carousel extends Component {
	intervalID = 0;

	constructor(props) {
		super(props);
		this.state = {
			activeID: 0,
			url: this.props.data[0].url,
			wrapperStyle: {
				backgroundImage: `url('${this.props.data[0].image}')`
			},
			buttonHover: false,
			buttonStyle: {
				color: '#ffffff'
			}
		};
	}

	componentDidMount(){
		const {data} = this.props;

		this.setState({
			activeID: 0,
			url: this.props.data[0].url,
			wrapperStyle: {
				backgroundImage: `url('${this.props.data[0].image}')`
			},
			buttonHover: false,
			buttonStyle: {
				color: '#ffffff'
			}
		})

		this.intervalID = setInterval(() => {
			if (data) {
			if (this.state.activeID===data.length-1){
				this.setState({
					activeID: 0,
				})
			} else {
				this.setState((prevState, props) => ({
					activeID: prevState.activeID + 1
				}));
			}

			this.changeActive(this.state.activeID)
			}
		}, 4000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	changeActive(id) {
		this.setState({
			activeID: id,
			url: this.props.data[id].url,
			wrapperStyle: {
				backgroundImage: `url('${this.props.data[id].image}')`
			}
		});
	}
	buttonColour() {
		if(!this.state.buttonHover){
			this.setState({
				buttonHover: true,
				buttonStyle: {
					color: this.props.data[this.state.activeID].colour
				}
			});
		} else {
			this.setState({
				buttonHover: false,
				buttonStyle: {
					color: '#ffffff'
				}
			});
		}
	}
	render() {
		const {hidePanel,mainCarousel} = this.props;

		return (
			<section className={classNames('wrapper', {"wrapper-main": mainCarousel}, {"wrapper-entity": !mainCarousel})} style={this.state.wrapperStyle}>
				<Selectors
					data={this.props.data}
					activeID={this.state.activeID}
					changeActive={this.changeActive.bind(this)}
				/>
				{ (!hidePanel && <Panel
					data={this.props.data[this.state.activeID]}
					buttonStyle={this.state.buttonStyle}
					buttonColour={this.buttonColour.bind(this)}
					url={this.state.url}
				/> )}
			</section>
		)
	}
}
class Panel extends React.Component {
	render() {
		return (
			<aside className="panel" style={this.props.panelStyle}>
				<Link to={this.props.url.substring(this.props.url.indexOf('hu')+2)}>
					<div className="carousel-logo-wrapper">
						{/* <img className="carousel-logo" src={carouselLogo}  alt="Archikon Architects Logo"/> */}
					</div>
				</Link>
			</aside>
		);
	}
}
class Selectors extends React.Component {
	handleClick(e) {
		if (this.props.id !== this.props.activeID) {
			this.props.changeActive(this.props.id);
		} else {
			return;
		}
	}
	render() {
		return (
			<div className="selectors">
				{this.props.data.map((item) =>
					<Selector
						key={item.id}
						id={item.id}
						handleClick={this.handleClick}
						changeActive={this.props.changeActive}
						activeID={this.props.activeID}
					/>
				)}
			</div>
		);
	}
}

class Selector extends React.Component {
	render() {
		let componentClass = 'selector';
		if (this.props.activeID === this.props.id) {
			componentClass = 'selector active';
		}
		return (
			<div className={componentClass} onClick={this.props.handleClick.bind(this)}></div>
		);
	}
}


export default Carousel
