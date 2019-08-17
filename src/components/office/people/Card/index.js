import React from 'react'
import './Card.scss'

const Card = (props) => {
  console.log(props)

  let name = props.data.name.split(' ');

  if (props.language==='en') {
    let first_name = name[0];
    let last_name = name[name.length-1]
    name[name.length-1] = first_name;
    name[0] = last_name
  }

  console.log(name)

  return (
    <div className="people-card">
      <div className="people-card-inner">
        <div className="avatar-wrapper">
          <img src={props.data.image}>
          </img>
        </div>
        <div className="text-wrapper">     
          <div className="name">
            {name.join(' ')}
          </div>
          <div className="detail">
            { (props.language==='hu') ? props.data.title_hu : props.data.title_en}
            <br/>
            {props.data.mail}
            <br/>
            {props.data.phone}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card;