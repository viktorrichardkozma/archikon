import React, { Component } from 'react'
import './contact.scss'
import Maps from './maps'
import { connect } from 'react-redux';
import Helmet from 'react-helmet'

import { fetchingContact } from '../../actions';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [],
        language: ''
    };
  }

  componentDidMount(){
    this.props.getContact()
  }

  static getDerivedStateFromProps(props, state) {
    if (props.language !== state.language) {
      return {
        contact: props.contact,
        language: props.language.lang,
        isLoading: props.isLoading
      };
    }
    return null;
  }

  render() {
    const { language, contact } = this.state;

    let title = '';
    let info = '';
    if (contact.contact) {
      if (language === 'hu') {
        title = contact.contact.title_hu
        info = contact.contact.info_hu
      } else {
        title = contact.contact.title_en
        info = contact.contact.info_en
      }
    }

    return <div className="contact">
      <ScrollToTopOnMount/>

      <Helmet>
        <title>{`Archikon |  ${language==="hu" ? 'Kapcsolat' : 'Contact'}`} </title>
      </Helmet>
      <div className="contact-wrapper">
      <div className="contact-wrapper-part map ">
        <Maps/>
      </div>
      <div className="contact-wrapper-part">
        <div className="text">
          <h1>{title}</h1>
          {info.split('\n').map(line => (<p>{line}</p>))}
        </div>
      </div>
    </div>
  </div>
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact,
    language: state.localization,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getContact: () => dispatch(fetchingContact())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);


