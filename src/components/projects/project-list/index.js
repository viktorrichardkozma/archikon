import React, {Component} from 'react';

import { connect } from 'react-redux';
import {fetchingProjects} from '../../../actions/';
import LoadingBar from '../../common/loading-bar'


import './project-listed.scss'

const Row = ({id, name_hu, name_en, location_en, location_hu , country_en, country_hu, year, type, language}) => (
  <div className="row" key={id}>
    <div>{language==="hu" ? name_hu : name_en}</div>
    <div>{language==="hu" ? location_hu : location_en}</div>
    <div>{language==="hu" ? country_hu : country_en}</div>
    <div>{year}</div>
  </div>
)

class ProjectListed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading,
      projects: null,
      sorted: false
    };
    
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  componentDidMount () { 
    this.props.getProjects()
  }
    
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.projects];
    arrayCopy.sort(this.compareBy(key));
  }
 
  static getDerivedStateFromProps(props, state) {
    if (props.projects !== state.projects && state.sorted===false) {
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

    const rows = (projects) ? projects.map( (rowData) => <Row {...rowData} language={language.lang} />) : null

    return (
      <div className="project-listed">
        <div className="project-listed-wrapper">
        {(isLoading===false && projects) ? ( 
          <div className="table">
            <div className="header">
              <div onClick={() => this.sortBy(language.lang==="hu" ? 'name_hu' : "name_en")}> Project •</div>
              <div onClick={() => this.sortBy(language.lang==="hu" ? 'location_hu' : "location_en")}>Location </div>
              <div onClick={() => this.sortBy(language.lang==="hu" ? 'country_hu' : "country_en")}>Country </div>
              <div onClick={() => this.sortBy('year')}>Year</div>
            </div>
            <div className="body">
              {rows}
            </div>
          </div>
          ) : <div class="loading-wrapper">
          <LoadingBar/>
        </div>}
        </div>
      </div>
    );
    
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListed);
