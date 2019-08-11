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
    const {projects} = this.props;
    const data = [
        {
          'id': 1,
          'name': 'Palatinus Strand főépület rekonstrukció',
          'year': 2018,
          'subtitle' : 'Budapest Építészeti Nívódíj, Kiemelt dícséret',
          'link': 'http://archikon.hu/epuletek/palatinus_strandfurdo.252.html?&pageid=16&typeid=3'
        },
        {
          'id': 2,
          'name': 'Hotel Moments',
          'year': 2018,
          'subtitle' : 'Budapesti Építész Kamara Építészeti Nívódíj, Építőipari Nívódíj',
          'link': 'http://archikon.hu/epuletek/palatinus_strandfurdo.252.html?&pageid=16&typeid=3'
        },
        {
          'id': 3,
          'name': 'Hotel Moments',
          'year': 2018,
          'subtitle' : 'Budapesti Építész Kamara Építészeti Nívódíj, Építőipari Nívódíj',
          'link': 'http://archikon.hu/epuletek/palatinus_strandfurdo.252.html?&pageid=16&typeid=3'
        },
        {
          'id': 3,
          'name': 'Hotel Moments',
          'year': 2018,
          'subtitle' : 'Budapesti Építész Kamara Építészeti Nívódíj, Építőipari Nívódíj',
          'link': 'http://archikon.hu/epuletek/palatinus_strandfurdo.252.html?&pageid=16&typeid=3'
        }
      ]   
     const awards = data.map(award =>
        <div>
          <p>
          {`${award.year} | `}
            <a href={award.link}>
            <b> {award.name}  </b>
            </a> {`| ${award.subtitle}`}         
          </p> 
        </div> 
      )

    return (this.props.visible===true) ?
    (<div>
      {awards}
    </div>) : null
  
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
