import React, { Component } from 'react'
import './contact.scss'
import Maps from './maps'
import { connect } from 'react-redux';
import Helmet from 'react-helmet'

//Action

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [],
        language:''
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.language !== state.language) {
      return {
        language: props.language.lang,
        isLoading: props.isLoading
      };
    }
    return null;
  }

  render() {
    const {language} = this.state;

    return <div className="contact">
      <Helmet>
        <title>{`Archikon |  ${language==="hu" ? 'Kapcsolat' : 'Contact'}`} </title>
      </Helmet>
      <div className="contact-wrapper">
      <div className="contact-wrapper-part map ">
        <Maps/>
      </div>
      <div className="contact-wrapper-part">
        <div className="text">

        <h1> Archikon Architects Kft.  </h1>
        <p>
          1114 Budapest, Bartók Béla út 61. fsz. 4-6.
        </p>
        <p>
          Tel.: +36 1 209 9376 | +36 1 209 9377
        </p>
        <p>
          Fax.: +36 1 209 9376/108 | Mobil: +36 30 746 5167
        </p>
        <p>
          E-mail: titkarsag@archikon.hu | Web: archikon.hu
        </p>  
        </div>
      </div>
    </div>
  </div>
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.localization
  };
};

export default connect(mapStateToProps, {})(Contact);

