import React, {Component} from 'react';

import { connect } from 'react-redux';
import './project-selected.scss'
import {fetchingProjects} from '../../../actions/';


import SquareView from './square-view/';
import LoadingBar from '../../common/loading-bar'

import { Link } from 'react-router-dom'

//Action

class ProjectsSelected extends Component {

  state = {
    isLoading: this.props.isLoading,
    projects: this.props.projects
  };

  componentDidMount () { 
    this.props.getProjects()
  }

  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if (props.Project !== state.Projects) {
      return {
        project: props.Projects,
        isLoading: props.isLoading
      };
    }
    return null;
  }

  render() {
    const {projects, isLoading} = this.state;
    const {language} = this.props;

    const selectedProjects = projects ? projects.map(project => 
          <SquareView id={project.id} data={project}/>    
    ) : null

    return (isLoading===false && projects) ? ( 
      {selectedProjects}
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
