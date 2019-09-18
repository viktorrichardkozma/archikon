import React, {Component} from 'react';

import { connect } from 'react-redux';
import './project-selected.scss'
import {fetchingProjects} from '../../../actions/';

import SquareView from './square-view/';
import LoadingBar from '../../common/loading-bar'
import Helmet from 'react-helmet'

import Selector from '../selector';

import './project-selected.scss'

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

class ProjectsSelected extends Component {
  state = {
    isLoading: this.props.isLoading,
    projects: this.props.projects,
    selectedProjectID: null,
  };

  showInfo = (id) => {
    this.setState({ selectedProjectID: id });
  }

  hideInfo = () => {
    this.setState({ selectedProjectID: null });
  }

  componentDidMount () { 
    this.props.getProjects()
  }

  static getDerivedStateFromProps(props, state) {
    if (props.projects !== state.projects) {
      return {
        projects: props.projects,
        isLoading: props.isLoading
      };
    }
    return null;
  }


  render() {
    const {projects, isLoading} = this.state
    const {language} = this.props;

    const selectedProjects = (projects!==null) ? projects.filter(
      project => project.selected===true
    ).map(project =>
      <SquareView key={project.id} id={project.id} data={project} language={language.lang} selectedID={this.props.selectedID} showInfo={this.showInfo} />
    ) : null

    // if (selectedProjects) {
    //   selectedProjects.reverse();
    // }

    return (isLoading===false && projects) ? (
      <div className="project-view-wrapper">
                     <ScrollToTopOnMount/>

           <Selector/>
          <div className="project-selected-wrapper">
          <Helmet>
            <title>{`Archikon |  ${language.lang==="hu" ? 'Projektek | Válogatott munkáink' : "Projects | Selected projects"}`} </title>
          </Helmet>
          {selectedProjects}
          </div>
      </div>
      )
      :  <div className="loading-wrapper selected">
        <LoadingBar/>
      </div>

  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
    isLoading: state.project.isLoading,
    language: state.localization
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchingProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsSelected);
