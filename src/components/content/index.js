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

import { withRouter } from 'react-router-dom'
import classNames from 'classnames';

import headerLogo from '../common/logos/archikon_logo_black.png'


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
    const {location} = this.props;

    return (
      <div className={classNames('content-wrapper', { 'content-wrapper-main-page': (location.pathname==='/' || location.pathname==='/contact') ? true : false})}>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/projects/" component={projects} />
            <Route exact path="/projects/:id" component={projectEntity} />
            <Route exact path="/office" component={office} />
            <Route exact path="/contact" component={contact} />
            <Route exact path="/admin" component={admin} />
            <Route component={notfound} />
          </Switch>
          {(location.pathname==='/office') && <img className="fixed-logo" src={headerLogo}  alt="Archikon Architects Logo"/>}
      </div>
    );
  }
}


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Projects));
