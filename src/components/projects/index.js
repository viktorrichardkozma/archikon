import React, {Fragment} from 'react';

import { connect } from 'react-redux';
import { fetchingProjects } from '../../actions/';

import Selector from './selector';
import ProjectListed from './project-list';
import ProjectSelected from './project-selected';

import './projects.scss'

//Action

import LoadingBar from '../common/loading-bar'

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}



class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        viewMode: 'selected'
    };
  }

  changeView = (view) => {
    this.setState({viewMode: view})
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.projects !== prevState.projects) {
        return { list: nextProps.externalList };
    }
    else return null; // Triggers no change in the state
  }

  render() {
    const {viewMode} = this.state;

    return (
      <Fragment>
                  <ScrollToTopOnMount/>

        <Selector changeView={this.changeView} viewMode={this.state.viewMode} />
        <div className="project-view-wrapper">
          {(true) ? ((viewMode === 'selected' ?
            (<ProjectSelected />) : 
            (<ProjectListed />)
          )
          ) : <LoadingBar/>}
        </div>

      </Fragment>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchingProjects())
  };
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
