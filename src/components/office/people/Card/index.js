import React from 'react'
import './Card.scss'

const Card = (data) => {
  return (
    <div className="people-card">
      <div className="people-card-inner">
        <div className="avatar-wrapper">
          <img src={'./people/'+'batta.png'}>
          </img>
          {/* <img src={'./people/'+data.data.photo}>
          </img> */}
        </div>
        <div className="text-wrapper">     
          <div className="name">
            {data.data.name}
          </div>
          <div className="contact">
            {data.data.mail}
            <br/>
            {data.data.phone}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card;