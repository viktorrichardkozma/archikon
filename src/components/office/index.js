import React, {Fragment, Component} from 'react';

import { connect } from 'react-redux';
import { fetchingProjects } from '../../actions/';
import Helmet from 'react-helmet'

import Selector from './selector';

import './office.scss'

import People from './people';
import AboutUs from './aboutus';
import Awards from './awards';


class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.enableContent = this.enableContent.bind(this)

    this.state = {
        viewMode: 'aboutus',
        isLoading: true
    };

    setTimeout(this.enableContent, 1280)
  }

  

  changeView = (view) => {
    window.scrollTo(0, 0)

    this.setState({viewMode: view})
  }

  enableContent() {
    this.setState({isLoading:false})
  }

  static getDerivedStateFromProps(props, state) {
    if (props.language !== state.language) {
      return {
        language: props.language.lang
      };
    }
    return null;
  }

  render() {
    const { viewMode, language} = this.state;
  
    return (
       
        <Fragment>
          <ScrollToTopOnMount/>

          <Helmet>
            <title>{`Archikon |  ${language==="hu" ? 'Iroda' : 'Office'}`} </title>
          </Helmet>
          <Selector changeView={this.changeView} viewMode={this.state.viewMode} />
          <div className="office-wrapper">  
            <AboutUs isVisible={(viewMode==="aboutus")} />  
            <People isVisible={(viewMode==="people")} />
            <Awards isVisible={(viewMode==="awards")} />
          </div>
        </Fragment>
        
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchingProjects())
  };
};

const mapStateToProps = (state) => {
  return {
    language: state.localization,
    projects: state.projects
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
