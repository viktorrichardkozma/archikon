import React, { Component } from 'react'
import LoadingBar from '../common/loading-bar'

export default class maps extends Component {
  constructor(props){
    super(props);
    this.enableContent = this.enableContent.bind(this)

    this.state = {  
      isLoading: true
    };

    setTimeout(this.enableContent, 1300)
  }

  enableContent() {
    this.setState({isLoading:false})
  }

  render() {
    return <div className="gmaphack">
    {this.state.isLoading===false ? (
      <div style={{width: '100%',overFlow: 'hidden', height: '400px'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.6751631578663!2d19.041628015820848!3d47.476759204931135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddb38f347413%3A0x2e0061ea620c1597!2sArchikon!5e0!3m2!1sen!2sbe!4v1565551444737!5m2!1sen!2sbe" width="100%" height="600" frameborder="0" style={{border:'0', marginTop: '-200px'}}>
        </iframe>
      </div>
      )  : <LoadingBar/> }
    </div>
  }
  
}
