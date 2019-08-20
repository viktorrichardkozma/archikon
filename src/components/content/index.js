import React from 'react';
import { connect } from 'react-redux';

import './content.scss'

import {Route, Switch} from 'react-router-dom'


import home from '../home'
import projectsSelected from '../projects/project-selected'
import projectsListed from '../projects/project-list'
import office from '../office'
import contact from '../contact'
import notfound from '../notfound'
import projectEntity from '../projectEntity'

import { withRouter } from 'react-router-dom'
import classNames from 'classnames';

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
      <div className={classNames('content-wrapper', { 'content-wrapper-main-page': (location.pathname==='/' || location.pathname==='/contact' || !isNaN(location.pathname.substr(location.pathname.lastIndexOf('/') + 1)))? true : false})}>
          {/* <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"          
          > */}
          <Switch>

            <Route exact path="/" component={home} />
            <Route exact path="/projects-selected/" component={projectsSelected} />
            <Route exact path="/projects-listed/" component={projectsListed} />
            <Route exact path="/projects/:id" component={projectEntity} />
            <Route exact path="/office" component={office} />
            <Route exact path="/contact" component={contact} />
            <Route component={notfound} />
          </Switch>
       
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
