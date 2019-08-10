import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

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

  componentDidMount() {
    // this.props.getProjects()
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.projects !== prevState.projects) {
        return { list: nextProps.externalList };
    }
    else return null; // Triggers no change in the state
    }


  render() {
    const {projects} = this.props

    return (
      <div className="content-wrapper">
             
             
             <LoadingBar/>
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
