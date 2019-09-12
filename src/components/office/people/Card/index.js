import React,{ Component } from 'react'
import './Card.scss'

class Card extends Component {
  state = {
    bottomBarOpened: false
  };

  openBottomBar = () => {
    this.setState((prevState) => ({
      bottomBarOpened: true
    }));
  }

  closeBottomBar = () => {
    this.setState((prevState) => ({
      bottomBarOpened: false
    }));
  }

  render() {
    let name = this.props.data.name.split(' ');
    const {bottomBarOpened} = this.state;

    if (this.props.language==='en') {
      let first_name = name[0];
      let last_name = name[name.length-1]
      name[name.length-1] = first_name;
      name[0] = last_name
    }

    return (
      <div className="people-card">
        <div className="people-card-inner">
          <div className="avatar-wrapper">
            <img alt={this.props.data.name} src={this.props.data.image}>
            </img>
          </div>
          <div className="text-wrapper">
            <div className="name">
              {name.join(' ')}
            </div>
            <div className="detail">
              { (this.props.language==='hu') ? this.props.data.title_hu : this.props.data.title_en}
              <br/>
              {this.props.data.email}
              <br/>
              {this.props.data.phone}
              {  (this.props.data.description_hu || this.props.data.description_en) ?
                <div onClick={this.openBottomBar} className="info">
                  + Info
                </div>
                : null }

          {bottomBarOpened &&
            <div className="bottombar">
              <div onClick={this.closeBottomBar} className="close">✕</div>
            {(this.props.language==='hu') ? this.props.data.description_hu : this.props.data.description_en}
          </div>}

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
