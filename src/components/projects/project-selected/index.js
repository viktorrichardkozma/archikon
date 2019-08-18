import React, {Component} from 'react';

import { connect } from 'react-redux';
import './project-selected.scss'
import {fetchingProjects} from '../../../actions/';


import SquareView from './square-view/';
import LoadingBar from '../../common/loading-bar'

import { Link } from 'react-router-dom'

import './project-selected.scss'

class ProjectsSelected extends Component {
  state = {
    isLoading: this.props.isLoading,
    projects: this.props.projects
  };

  
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
    const {projects, isLoading} = this.state;
    const {language} = this.props;

    const selectedProjects = (projects!==null) ? projects.map(project => 
      <SquareView id={project.id} data={project} language={language.lang}/>    
    ) : null

    return (isLoading===false && projects) ? ( 
      <div className="project-selected-wrapper">
      {selectedProjects}
      </div>
    )
    :  <div class="loading-wrapper">
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
