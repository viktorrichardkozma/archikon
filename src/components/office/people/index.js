import React, {Component} from 'react';

import { connect } from 'react-redux';
//Action

import './people.scss'

import Card from './Card/index.js';

class Header2 extends React.Component {
	render() {
		return (
			<h2>
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

  constructor(props) {
    super(props);
    this.state = {
        list: []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.projects !== prevState.projects) {
        return { list: nextProps.externalList };
    }
    else return null; // Triggers no change in the state
    }

  render() {
    // const {people} = this.props;



    const boss = [{
      "name": "Batta Miklós",
      "title": "Építész tervező",
      "mail": "miklos.batta@archikon.hu",
      "phone": " +36 1 209 9376/113",
      "photo": "batta.png"
    },
    {
      "name": "Benedek Botond",
      "title": "Építész tervező",
      "mail": "botond.benedek@archikon.hu",
      "phone": " +36 30 201 5887",
      "photo": "benedek.png"
    },
    {
      "name": "Bognár Gergely",
      "title": "Építész tervező",
      "mail": "gergely.bognar@archikon.hu",
      "phone": " +36 70 358 5903",
      "photo": "bognar.png"
    }]

    const people = [
      {
        "name": "Batta Miklós",
        "title": "Építész tervező",
        "mail": "miklos.batta@archikon.hu",
        "phone": " +36 1 209 9376/113",
        "photo": "batta.png"
      },
      {
        "name": "Benedek Botond",
        "title": "Építész tervező",
        "mail": "botond.benedek@archikon.hu",
        "phone": " +36 30 201 5887",
        "photo": "benedek.png"
      },
      {
        "name": "Bognár Gergely",
        "title": "Építész tervező",
        "mail": "gergely.bognar@archikon.hu",
        "phone": " +36 70 358 5903",
        "photo": "bognar.png"
      },
      {
        "name": "Bóday-Bagó Bernadett",
        "title": "Építész tervező",
        "mail": "betti.boday-bago@archikon.hu",
        "phone": " +36 1 209 9376/108",
        "photo": "bodaybago.png"
      },
      {
        "name": "Chvalla Diána",
        "title": "Építész tervező",
        "mail": "diana.chvalla@archikon.hu",
        "phone": " +36 1 209 9376/124",
        "photo": "chvalla.png"
      },
      {
        "name": "Csáthy Dorottya",
        "title": "Építész tervező",
        "mail": "dorottya.csathy@archikon.hu",
        "phone": " +36 1 209 9376/110",
        "photo": "csathy.png"
      },
      {
        "name": "Dobos Bence László",
        "title": "Építész tervező",
        "mail": "bence.dobos@archikon.hu",
        "phone": " +36 1 209 9376/106, +36 30 229 2545",
        "photo": "dobos.png"
      },
      {
        "name": "Laczkó Gábor",
        "title": "Építész tervező",
        "mail": "gabor.laczko@archikon.hu",
        "phone": " +36 1 209 9376/127, +36 70 635 6065",
        "photo": "laczko.png"
      },
      {
        "name": "Long Yining",
        "title": "Építész tervező",
        "mail": "yining.long@archikon.hu",
        "phone": " +36 1 209 9376/116",
        "photo": "long.png"
      },
      {
        "name": "Major Eszter",
        "title": "Építész tervező",
        "mail": "eszter.major@archikon.hu",
        "phone": " +36 1 209 9376/105",
        "photo": "major.png"
      },
      {
        "name": "Nagy Zsolt",
        "title": "Építész tervező",
        "mail": "zsolt.nagy@archikon.hu",
        "phone": " +36 1 209 9376/122, +36 20 936 8102 ",
        "photo": "nagy.png"
      },
      {
        "name": "Nahoczki Éva",
        "title": "Építész tervező",
        "mail": "eva.nahoczki@archikon.hu",
        "phone": " +36 1 209 9376/123, +36 30 427 0447",
        "photo": "nahoczki.png"
      },
      {
        "name": "Pásztor Ádám",
        "title": "Építész tervező",
        "mail": "adam.pasztor@archikon.hu",
        "phone": " +36 1 209 9376/112",
        "photo": "pasztor.png"
      },
      {
        "name": "Petró Noémi",
        "title": "Építész tervező",
        "mail": "noemi.petro@archikon.hu",
        "phone": " +36 1 209 9376/120",
        "photo": "petro.png"
      },
      {
        "name": "Reményi Petra",
        "title": "Építész tervező",
        "mail": "petra.remenyi@archikon.hu",
        "phone": " +36 1 209 9376/117",
        "photo": "remenyi.png"
      },
      {
        "name": "T. Major Krisztina",
        "title": "Építész tervező",
        "mail": "kriszta.major@archikon.hu",
        "phone": " +36 30 657 6600, +36 1 209 9376/119",
        "photo": "tmajor.png"
      },
      {
        "name": "Tajti Judit",
        "title": "Építész tervező",
        "mail": "judit.tajti@archikon.hu",
        "phone": " +36 1 209 9376/114, + 36 20 210 13 98",
        "photo": "tajti.png"
      },
      {
        "name": "Varga Bianka",
        "title": "Építész tervező",
        "mail": "bianka.varga@archikon.hu",
        "phone": " +36 1 209 9376/125",
        "photo": "varga.png"
      },
      {
        "name": "Várhidi Bence",
        "title": "Építész tervező",
        "mail": "bence.varhidi@archikon.hu",
        "phone": " +36 30 992 3604",
        "photo": "varhidi.png"
      },
      {
        "name": "Zsidai Nikoletta",
        "title": "Építész tervező",
        "mail": "nikoletta.zsidai@archikon.hu",
        "phone": " +36 1 209 9376/121",
        "photo": "zsidai.png"
      },
      {
        "name": "Szlávik Ágnes",
        "title": "Irodavezető asszisztens",
        "mail": "agnes.szlavik@archikon.hu",
        "phone": " +36 1 2099376, +36 70 6392899",
        "photo": "szlavik.png"
      }
     ];

     const exPeople = [
       'Kozma Viktor Richárd',
       'Kaszanyi Nóra',
       'Hegyi Gellért',
       'Kozma Viktor Richárd',
       'Kaszanyi Nóra',
       'Hegyi Gellért'
     ]

    const bossLen = boss.length;


    return (this.props.visible===true) ?
    (  
      <div className="people">
        <div className="boss-wrapper">
          { 
            boss.map(human => {
              return <Card key={human.photo} data={human}/> 
            })
          }
        </div>

        <div className="people-wrapper">
          {
            people.map(human => {
              return <Card key={human.photo} data={human}/> 
            })
          }
        </div>
        <hr/>
        <div className="people-ex-wrapper">
          <Header2 data={"Volt munkatársaink"}/>
          { 
            exPeople.map(human => {
            return <div> {human} </div>

            })
          }
        </div>
        <hr/>
        <div className="people-new-wrapper">

          <Header2 data={"Jövőbeli munkatársaink"}/>
          <a href="mailto:titkarsag@archikon.hu?subject=Archikon | jelentkezés"> 
            <Button data={"JELENTKEZZ!"}/>
          </a> 
        </div>

      </div>
    ) : null
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     projects: state.projects,
//   };
// };

export default (People);
