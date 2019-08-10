import PropTypes from 'prop-types';
import React, {Component} from 'react';

import { connect } from 'react-redux';
import './project-selected.scss'

import SquareView from './square-view/';

//Action

class ProjectsSelected extends Component {

  constructor(props) {
    super(props);
    this.state = {
        list: []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.projects !== prevState.projects) {
        return { list: nextProps.externalList };
    }
    else return null; // Triggers no change in the state
    }


  render() {
    // const {projects} = this.props;
    
    const projects= [
        {
          name: "Egyszülős központ",
          location: "Budapest, IX. kerület, Üllői út",
          img: "CICA"
        },
        {
          name: "Egyszülős központ",
          location: "Budapest, IX. kerület, Üllői út",
          img: "CICA"
        },
        {
          name: "Egyszülős központ",
          location: "Budapest, IX. kerület, Üllői út",
          img: "CICA"
        },
        {
          name: "Egyszülős központ",
          location: "Budapest, IX. kerület, Üllői út",
          img: "CICA"
        },
        {
          name: "Egyszülős központ",
          location: "Budapest, IX. kerület, Üllői út",
          img: "CICA"
        },
        {
          name: "Egyszülős központ",
          location: "Budapest, IX. kerület, Üllői út",
          img: "CICA"
        },
        {
          name: "Egyszülős központ",
          location: "Budapest, IX. kerület, Üllői út",
          img: "CICA"
        },
        {
          name: "Egyszülős központ",
          location: "Budapest, IX. kerület, Üllői út",
          img: "CICA"
        },
        {
          name: "Egyszülős központ",
          location: "Budapest, IX. kerület, Üllői út",
          img: "CICA"
        },
        {
          name: "Egyszülős központ",
          location: "Budapest, IX. kerület, Üllői út",
          img: "CICA"
        },
        {
          name: "Egyszülős központ",
          location: "Budapest, IX. kerület, Üllői út",
          img: "CICA"
        }
      ];

    const selectedProjects = projects.map(project => 
        <SquareView data={project}/>    
    )

    return (
        <div className="project-selected">
            <div className="project-selected-wrapper">
              {selectedProjects}

            </div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsSelected);
