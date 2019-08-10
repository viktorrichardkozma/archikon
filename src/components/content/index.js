import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LoadingBar from '../common/loading-bar'
import './content.scss'

import {Route, Switch} from 'react-router-dom'

import home from '../home'
import projects from '../projects'
import office from '../office'
import contact from '../contact'
import notfound from '../notfound'

import admin from '../admin'
import projectEntity from '../projectEntity'

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        list: []
    };
  }

  componentDidMount() {
    // this.props.getProjects()
  }



  render() {


    return (
      <div className="content-wrapper">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/projects/" component={projects} />
            <Route exact path="/projects/:id" component={projectEntity} />
            <Route exact path="/office" component={office} />
            <Route exact path="/contact" component={contact} />
            <Route component={notfound} />
          </Switch>
      </div>
    );
  }
}

Permissions.propTypes = {
  listOfProjects: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getProjects: (filters) => dispatch(getProjects(filters))
  };
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
