import React, {Component} from 'react';

import { connect } from 'react-redux';
import {fetchingProjects} from '../../../actions/';
import LoadingBar from '../../common/loading-bar'

import { Helmet } from 'react-helmet'

import {FormattedMessage} from 'react-intl'

import CategoriesTranslator from '../../common/categoryTranslator';

import './project-listed.scss'

const Row = ({id, name, location, country, year, category}) => (
  <div className="row" key={id}>
    <div className="name">{name}</div>
    <div className="location">{location}</div>
    <div className="country">{country}</div>
    <div className="year">{year}</div>
    <div className="category">
      <CategoriesTranslator categories={category} />
    </div>
  </div>
)

class ProjectListed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading,
      projects: null,
      sorted: false,
      searchvalue: null,
      sorterType: "yearSorter",
      filters: []
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
 
  sortBy(key,event) {
    let arrayCopy = [...this.state.projects];
    arrayCopy.sort(this.compareBy(key));

    this.setState({
      projects: arrayCopy,
      sorted: true,
      sorterType: event.currentTarget.id
    })

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
    if (props.filters !== state.filters) {
      return {
        filters: props.filters
      };
    }
    return null;
  }

  render() {
    const {
      projects,
      isLoading,
      searchvalue,
      filters
    } = this.state;

    const {language} = this.props;

    let projectTranslated = (projects) ? projects.map( (project) => (
      { 
        id: project.id,
        name: language.lang==="hu" ? project.name_hu : project.name_en,
        location: language.lang==="hu" ? project.location_hu : project.location_en,
        country: language.lang==="hu" ? project.country_hu : project.country_en,
        category: project.category,
        year: project.year.toString()
    })
    ) : null
 
   let projectSearchFiltered = (searchvalue && projectTranslated) ? 
     projectTranslated.filter((project) => 
        project.name.toLowerCase().match(searchvalue) || 
        project.location.toLowerCase().match(searchvalue) ||
        project.country.toLowerCase().match(searchvalue) ||
        project.category.toLowerCase().includes(searchvalue) ||
        project.year.match(searchvalue)
    ) : projectTranslated

    let projectFiltered = (filters.length!==0 && projectSearchFiltered) ? (
      projectTranslated.filter((project) => {
        return (project.category.split(',').filter(category=>filters.includes(category)).length!==0)
      })
    ) : projectSearchFiltered

  let rows = (projectFiltered && projectFiltered.length!==0) ? projectFiltered.map( (rowData) => <Row {...rowData} />)
    : 
    <div className="row notfound" >
          -
    </div>
   
    return (
      
      <div className="project-listed">
        <Helmet>
          <title>{`Archikon |  ${language.lang==="hu" ? 'Projektek | Lista' : "Projects | List"}`} </title>
        </Helmet>
        <div className="project-listed-wrapper">
        {(isLoading===false && projects) ? ( 
          <div className="table">
            <div className="header">
              <div id="nameSorter" className="name" onClick={(e) => this.sortBy(language.lang==="hu" ? 'name_hu' : "name_en",e)}>
                <FormattedMessage id="project_list"> </FormattedMessage>  {this.state.sorterType === "nameSorter" ? "■" : ""}
              </div>
              <div id="locationSorter" className="location" onClick={(e) => this.sortBy(language.lang==="hu" ? 'location_hu' : "location_en",e)}>
                <FormattedMessage id="location_list"> </FormattedMessage> {this.state.sorterType === "locationSorter" ? "■" : ""}
              </div>
              <div id="countrySorter" className="country" onClick={(e) => this.sortBy(language.lang==="hu" ? 'country_hu' : "country_en",e)}>
                <FormattedMessage id="country_list"> </FormattedMessage> {this.state.sorterType === "countrySorter" ? "■" : ""}
              </div>
             
              <div id="yearSorter" className="year" onClick={(e) => this.sortBy('year',e)}>
               <FormattedMessage id="year_list"> </FormattedMessage> {this.state.sorterType === "yearSorter" ? "■" : ""}
              </div>
              <div id="yearSorter" className="category">
               <FormattedMessage id="category_list"> </FormattedMessage>
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
    filters: state.project.filters,
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
