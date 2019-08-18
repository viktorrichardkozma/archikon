import React, {Component} from 'react';

import { connect } from 'react-redux';
import {fetchingProjects} from '../../../actions/';
import LoadingBar from '../../common/loading-bar'

import {FormattedMessage} from 'react-intl'


import './project-listed.scss'

const Row = ({id, name, location, country, year, category}) => (
  <div className="row" key={id}>
    <div className="name">{name}</div>
    <div className="location">{location}</div>
    <div className="country">{country}</div>
    <div className="year">{year}</div>
  </div>
)

class ProjectListed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading,
      projects: null,
      sorted: false,
      searchvalue: null
    };
    
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  componentDidMount () { 
    this.props.getProjects()
  }
    
  compareBy(key) {
    if (key!="year") {
      return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    } else {
      return function (a, b) {
        if (a[key] < b[key]) return 1;
        if (a[key] > b[key]) return -1;
        return 0;
      };
    }
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.projects];
    arrayCopy.sort(this.compareBy(key));
    this.setState({projects: arrayCopy, sorted: true})
  }
 
  static getDerivedStateFromProps(props, state) {
    if (props.projects !== state.projects && state.sorted===false) {
      return {
        projects: props.projects,
        isLoading: props.isLoading
      };
    }

    if (props.searchvalue !== state.searchvalue) {
      return {
        searchvalue: props.searchvalue
      };
    }


    return null;
  }

  render() {
    const {projects, isLoading, searchvalue} = this.state;
    const {language} = this.props;

    let projectTranslated = (projects) ? projects.map( (project) => (
      { 
        id: project.id,
        name: language==="hu" ? project.name_hu : project.name_en,
        location: language==="hu" ? project.location_hu : project.location_en,
        country: language==="hu" ? project.country_hu : project.country_en,
        category: project.category,
        year: project.year.toString()
    })
    ) : null

   let projectFiltered = (searchvalue && projectTranslated) ? 
     projectTranslated.filter((project) => 
        project.name.toLowerCase().match(searchvalue) || 
        project.location.toLowerCase().match(searchvalue) ||
        project.country.toLowerCase().match(searchvalue) ||
        project.category.toLowerCase().match(searchvalue) ||
        project.year.match(searchvalue)
    ) : projectTranslated

  
  
  let rows = (projectFiltered && projectFiltered.length!==0) ? projectFiltered.map( (rowData) => <Row {...rowData} />)
    : 
    <div className="row notfound" >
          -
    </div>
   
    return (
      <div className="project-listed">
        <div className="project-listed-wrapper">
        {(isLoading===false && projects) ? ( 
          <div className="table">
            <div className="header">
              <div className="name" onClick={() => this.sortBy(language.lang==="hu" ? 'name_hu' : "name_en")}>
                <FormattedMessage id="project_list"> </FormattedMessage>
              </div>
              <div className="location" onClick={() => this.sortBy(language.lang==="hu" ? 'location_hu' : "location_en")}>
                <FormattedMessage id="location_list"> </FormattedMessage>
              </div>
              <div className="country" onClick={() => this.sortBy(language.lang==="hu" ? 'country_hu' : "country_en")}>
                <FormattedMessage id="country_list"> </FormattedMessage>
              </div>
              <div  className="year" onClick={() => this.sortBy('year')}>
               <FormattedMessage id="year_list"> </FormattedMessage>

              </div>
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
    searchvalue: state.project.searchvalue,
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
