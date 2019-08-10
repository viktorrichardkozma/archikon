import PropTypes from 'prop-types';
import React from 'react';

import { connect } from 'react-redux';
import { getMenuState } from '../../actions'

//Action

import LoadingBar from '../common/loading-bar'

const styles = theme => ({
  contents: theme.contents,
  noBorderBottom: theme.noBorderBottom,
  progress: theme.progress
});

class Projects extends React.Component {

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
    const {projects} = this.props
    const listOfProjects = projects && this.props.projects.isFetching !== true ? (
          "cica"
    ) : <LoadingBar/>

    return (
      <div>
        {listOfProjects}
      </div>
    );
  }
}

Permissions.propTypes = {
  listOfProjects: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMenuState: (filters) => dispatch(getMenuState(filters))
  };
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
