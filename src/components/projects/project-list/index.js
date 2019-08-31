import React, {Component} from 'react';

import { connect } from 'react-redux';
import {fetchingProjects,addCategoryFilter} from '../../../actions/';
import LoadingBar from '../../common/loading-bar'
import { Link } from "react-router-relative-link";

import { Helmet } from 'react-helmet'

import {FormattedMessage} from 'react-intl'
import Selector from '../selector';
import classNames from 'classnames';

import { translateCategoriesString } from '../../common/categoryTranslator';

import { ReactComponent as DownArrow } from './down.svg';

import './project-listed.scss'

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

const Row = ({id, name, location, country, year, category, hassite}) => (
    <div className={classNames('row',{'hasSite' : hassite })} key={id}>
      <div className="name">{name}</div>
      <div className="location">{location}</div>
      <div className="country">{country}</div>
      <div className="year">{year}</div>
      <div className="category">{category}</div>
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
      filters: [],
      ascending: true,
      sortKey: '',
    };

    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  componentDidMount () { 
    this.props.getProjects()
  }

  componentWillUnmount(){
    this.props.addCategoryFilter('all')
  }

  compareBy(key, ascending, lang) {
    if (ascending) {
      return function (a, b) {
        const first = key === 'category' ? translateCategoriesString(a[key], lang) : a[key];
        const second = key === 'category' ? translateCategoriesString(b[key], lang) : b[key];

        if (first < second) return -1;
        if (first > second) return 1;
        return 0;
      };
    } else {
      return function (a, b) {
        const first = key === 'category' ? translateCategoriesString(a[key], lang) : a[key];
        const second = key === 'category' ? translateCategoriesString(b[key], lang) : b[key];

        if (first < second) return 1;
        if (first > second) return -1;
        return 0;
      };
    }
  }

  sortBy(key, lang) {
    let ascending = this.state.ascending;
    if (this.state.sortKey !== key) {
      ascending = true;
    }

    let arrayCopy = [...this.state.projects]
    arrayCopy.sort(this.compareBy(key, ascending, lang));

    this.setState({
      projects: arrayCopy,
      sorted: true,
      ascending: !ascending,
      sortKey: key,
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
        category: translateCategoriesString(project.category, language.lang),
        categorytoFilters: project.category,
        hassite: project.listed,
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

        return (project.categorytoFilters.split(',').filter(category => filters.includes(category)).length!==0)
      })
    ) : projectSearchFiltered

    let rows = (projectFiltered && projectFiltered.length!==0) ? projectFiltered.map( (rowData) =>
    rowData.hassite ?
        <Link key={rowData.id} to={`/projects/${rowData.id}`}>
          <Row {...rowData} />
        </Link> :  <Row key={rowData.id}  {...rowData} />
    )
      :
      <div className="row notfound" >
            -
      </div>

    return (
      <div className="project-view-wrapper">
         <ScrollToTopOnMount/>

        <Selector/>

        <div className="project-listed">
          <Helmet>
            <title>{`Archikon |  ${language.lang==="hu" ? 'Projektek | Lista' : "Projects | List"}`} </title>
          </Helmet>
          <div className="project-listed-wrapper">
          {(isLoading===false && projects) ? (
            <div className="table">
              <div className="header">
                <div id="nameSorter" className="name"
                  onClick={(e) => this.sortBy(language.lang === "hu" ? 'name_hu' : "name_en", language.lang)}
                >
                  <FormattedMessage id="project_list"></FormattedMessage> {
                    this.state.sortKey.startsWith('name') ? <SortDirectionArrow ascending={this.state.ascending} /> : null
                  }
                </div>
                <div id="locationSorter" className="location"
                  onClick={(e) => this.sortBy(language.lang === "hu" ? 'location_hu' : "location_en", language.lang)}
                >
                  <FormattedMessage id="location_list"></FormattedMessage> {
                    this.state.sortKey.startsWith('location') ? <SortDirectionArrow ascending={this.state.ascending} /> : null
                  }
                </div>
                <div id="countrySorter" className="country"
                  onClick={(e) => this.sortBy(language.lang === "hu" ? 'country_hu' : "country_en", language.lang)}
                >
                  <FormattedMessage id="country_list"></FormattedMessage> {
                    this.state.sortKey.startsWith('country') ? <SortDirectionArrow ascending={this.state.ascending} /> : null
                  }
                </div>
                <div id="yearSorter" className="year"
                  onClick={(e) => this.sortBy('year', language.lang)}
                >
                  <FormattedMessage id="year_list"></FormattedMessage> {
                    this.state.sortKey.startsWith('year') ? <SortDirectionArrow ascending={this.state.ascending} /> : null
                  }
                </div>
                <div id="yearSorter" className="category"
                  onClick={(e) => this.sortBy('category', language.lang)}
                >
                <FormattedMessage id="category_list"> </FormattedMessage> {
                  this.state.sortKey.startsWith('category') ? <SortDirectionArrow ascending={this.state.ascending} /> : null
                }
                </div>
              </div>
              <div className="body">
                {rows}
              </div>
            </div>
            ) : <div className="loading-wrapper">
            <LoadingBar/>
          </div>}
          </div>
        </div>
      </div>
    );
  }
}

const SortDirectionArrow = (props) => {
  return <DownArrow className={props.ascending ? 'descending' : ''} />;
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
    getProjects: () => dispatch(fetchingProjects()),
    addCategoryFilter: (value) => dispatch(addCategoryFilter(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListed);
