import React, { Component } from 'react'
import './projectentity.scss'
import {fetchingProject} from '../../actions/';
import LoadingBar from '../common/loading-bar'
import { connect } from 'react-redux';
import Carousel from '../home/carousel';
import { ReactComponent as Arrow} from '../common/icons/nyil.svg'
import CategoriesTranslator from '../common/categoryTranslator';

class projectEntity extends Component {
  state = {
    isLoading: this.props.isLoading,
    selectedProject: this.props.selectedProject
  };

  componentDidMount(){
    this.props.getProject(this.props.match.params.id); 
  }
  
  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if (props.selectedProject !== state.selectedProject) {
      return {
        selectedProject: props.selectedProject,
        isLoading: props.isLoading
      };
    }
    return null;
  }


  render() {
    const {selectedProject, isLoading} = this.state;
    const {language} = this.props;

    let addedIdToImages = (selectedProject) ? selectedProject.images.map( (image, id) => {
      return {id: id, img: image.image} 
     }
    ) : null 
 
    return (isLoading===false && selectedProject) ? ( 
        <div className="project-entity">
          <div className="chevron-wrapper">
            <Arrow/> 
          </div>
          <div className="detail">
            <div className="category-wrapper">
              <div className="category">
                <CategoriesTranslator categories={selectedProject.category} />
              </div>
            </div>
            <div className="title-wrapper">
              <div className="title">
              {(language.lang==='hu') ? selectedProject.name_hu : selectedProject.name_en}
              </div>
            </div>
            <div className="address-wrapper">
              <div className="year">
                2010
              </div>
              <div className="address">
                {(language.lang==='hu') ? selectedProject.location_hu + ", "+selectedProject.country_hu : selectedProject.location_en + ", "+selectedProject.country_en}
              </div>
            </div>
            <div className="description-wrapper">
              <div className="description">
               {(language.lang==='hu') ? selectedProject.description_hu : selectedProject.description_en}
              </div>
            </div>
          </div>

          <div className="gallery-wrapper">
     				<Carousel hidePanel={true} data={addedIdToImages} />
          </div>
        </div>
      )
    :  
    <div class="loading-wrapper">
      <LoadingBar/>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProject: state.project.selectedProject,
    isLoading: state.project.isLoading,
    language: state.localization
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getProject: (id) => dispatch(fetchingProject(id))
  };
};


export default (connect(mapStateToProps, mapDispatchToProps)(projectEntity));



