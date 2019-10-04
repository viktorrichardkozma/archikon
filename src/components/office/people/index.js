import React, {Component} from 'react';

import {fetchingStaff} from '../../../actions/';
import LoadingBar from '../../common/loading-bar'

import { connect } from 'react-redux';
//Action

import './people.scss'

import Card from './Card/index.js';

class Header2 extends React.Component {
	render() {
		return (
			<h2 style={{textAlign:'center'}}>
        {this.props.data}
			</h2>
		);
	}
}

class Button extends React.Component {
	render() {
		return (
			<div className="apply">
        {this.props.data}
			</div>
		);
	}
}

class People extends Component {
  state = {
    isLoading: this.props.isLoading,
    staff: this.props.staff,
    bottomBarOpened: false,
    description: null,
    selectedName: null,
  };

  componentDidMount () { 
    this.props.getStaff()
  }

  openBottomBar = (selectedName, description) => {
    this.setState({
      ...this.state,
      selectedName,
      description,
      bottomBarOpened: true,
    });
  }

  closeBottomBar = () => {
    this.setState({
      ...this.state,
      selectedName: null,
      description: null,
      bottomBarOpened: false,
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.staff !== state.staff) {
      return {
        staff: props.staff,
        isLoading: props.isLoading
      };
    }
    return null;
  }

  render() {

    const {staff, isLoading}= this.state;
    const {language} = this.props;

    const nonactiveStaff = (staff) ? staff.filter( human => human.active===false)
    : null

    const activeStaff = staff &&
      staff.filter((human) => (human.active && !human.leader && human.name !== 'Szlávik Ágnes'))
    if (staff) {
      const assistant = staff.filter((human) => (human.name === 'Szlávik Ágnes'))[0];
      activeStaff.push(assistant);
    }

    const bossStaff = (staff) ? staff.filter( human => human.leader===true) : null

    return (this.props.isVisible===true) ?
    ((isLoading===false && staff) ? (
      <div className="people">
        <div className="boss-wrapper">
          {
            bossStaff.map(human => {
              return <Card
                key={human.id}
                openBottomBar={this.openBottomBar}
                closeBottomBar={this.closeBottomBar}
                bottomBarOpened={this.state.bottomBarOpened}
                selectedName={this.state.selectedName}
                language={language.lang}
                data={human}
              />
            })
          }
        </div>

        <div className="people-wrapper">
          {
            activeStaff.map(human => {
              return <Card key={human.id} language={language.lang} data={human} />
            })
          }
        </div>
        <hr/>
        <div className="people-ex-wrapper">
          <Header2 data={(language.lang==="hu") ? "Volt munkatársaink" : "Former colleagues"}/>
          { (nonactiveStaff.length!==0) ?
            nonactiveStaff.map(human => {
              let name = human.name.split(' ');
              console.log(name)

              if (this.props.language.lang==='en') {
                let first_name = name[0];
                let last_name = name[name.length-1]
                name[name.length-1] = first_name;
                name[0] = last_name
              }
            
              return <div> {name.join(' ')} </div>
            }) : "-"
          }
        </div>
        <hr/>
        <div className="people-new-wrapper">

          <Header2 data={(language.lang==="hu") ? "Jövőbeli munkatársaink" : "Our future colleagues"}/>
          <a href="mailto:office@archikon.hu?subject=Archikon | jelentkezés">
            <Button data={(language.lang==="hu") ? "JELENTKEZZ!" : "APPLY!"}/>
          </a>
        </div>

        {this.state.bottomBarOpened &&
          <div className="bottombar">
            <div onClick={this.closeBottomBar} className="close">✕</div>
            {this.state.description}
          </div>}
      </div>
    ) : <LoadingBar/>)
    : null }

}

const mapStateToProps = (state) => {
  return {
    staff: state.staff.staff,
    isLoading: state.staff.isLoading,
    language: state.localization
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStaff: () => dispatch(fetchingStaff())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
