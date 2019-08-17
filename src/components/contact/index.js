import React, { Component } from 'react'
import './contact.scss'
import Maps from './maps'

export default class index extends Component {
  render() {

    return (
      <div className="contact">
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
    )
  }
}
