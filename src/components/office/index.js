import React, {Fragment} from 'react';

import { connect } from 'react-redux';
import { fetchingProjects } from '../../actions/';
import Helmet from 'react-helmet'

import Selector from './selector';

import './office.scss'

//Action
import LoadingBar from '../common/loading-bar'

import People from './people';
import AboutUs from './aboutus';
import Awards from './awards';

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
        (true) ? (
        <Fragment>
          <Helmet>
            <title>{`Archikon |  ${language==="hu" ? 'Iroda' : 'Office'}`} </title>
          </Helmet>
          <Selector changeView={this.changeView} viewMode={this.state.viewMode} />
          <div className="office-wrapper">  
            <AboutUs visible={(viewMode==="aboutus")} />  
            <People visible={(viewMode==="people")} />
            <Awards visible={(viewMode==="awards")} />
          </div>
        </Fragment>
        )  : <LoadingBar/> 
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
