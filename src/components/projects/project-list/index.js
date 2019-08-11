import React, {Component} from 'react';

import { connect } from 'react-redux';

//Action


const styles = theme => ({
  contents: theme.contents,
  noBorderBottom: theme.noBorderBottom,
  progress: theme.progress
});

class ProjectListed extends Component {

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

    return (
      <div>
 
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListed);
