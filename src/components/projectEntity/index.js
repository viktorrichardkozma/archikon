import React, { Component } from 'react'
import './projectentity.scss'
import {fetchingProject} from '../../actions/';
import LoadingBar from '../common/loading-bar'
import { connect } from 'react-redux';
import Carousel from '../home/carousel';
import classNames from 'classnames';
import {FormattedMessage} from 'react-intl'
import Helmet from 'react-helmet'
import { withRouter } from 'react-router-dom'


import { ReactComponent as Arrow} from '../common/icons/nyil.svg'
import CategoriesTranslator from '../common/categoryTranslator';
import { ReactComponent as DownArrow} from '../common/icons/down.svg';

class projectEntity extends Component {
  state = {
    isLoading: this.props.isLoading,
    selectedProject: this.props.selectedProject,
    seeMoreOpened: false,
    seeMoreEnabled: false
  };

  componentDidMount(){
    this.props.getProject(this.props.match.params.id); 

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  removeImageData = () => {
    this.setState({
      selectedProject: null
    });
  }

  changeseeMoreState = () => {
    const {seeMoreOpened} = this.state;

    this.setState({
      seeMoreOpened: !seeMoreOpened
    })

  };

  goBack(){
    this.props.history.goBack();
  }
  
  resize() {
    if (window.innerWidth <= 768){
      this.setState({
        seeMoreEnabled: true
      })
    } else {
      this.setState({
        seeMoreEnabled: false
      })
    }
  }

  static getDerivedStateFromProps(props, state) {

    if (props.selectedProject !== state.selectedProject) {
      return {
        selectedProject: props.selectedProject,
        isLoading: props.isLoading
      };
    }
    return null;
  }

  render() {
    const {selectedProject, isLoading, seeMoreOpened, seeMoreEnabled} = this.state;
    const {language} = this.props;

    let addedIdToImages = (selectedProject) ? selectedProject.images.map( (image, id) => {
      return {id: id, image: image.image} 
     }
    ) : null 
 
    return (isLoading===false && selectedProject) ? ( 
        <div className="project-entity">
          <Helmet>
            <title>{`Archikon |  ${language.lang==="hu" ? selectedProject.name_hu : selectedProject.name_en}`} </title>
          </Helmet>
          <div className="chevron-wrapper">
            
            <Arrow onClick={() => this.goBack()}/> 
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
                {selectedProject.year}
              </div>
              <div className="address">
                {(language.lang==='hu') ? selectedProject.location_hu + ", "+selectedProject.country_hu : selectedProject.location_en + ", "+selectedProject.country_en}
              </div>
            </div>
            <div className="description-wrapper">
              <div className="description">
               {
                 (!seeMoreEnabled) ? (
                    (language.lang==='hu')
                    ? selectedProject.description_hu
                    : selectedProject.description_en
                 ) : (
                    (selectedProject.description_hu.length < 200) ?
                  (
                    (language.lang==='hu')
                    ? selectedProject.description_hu
                    : selectedProject.description_en
                  ) : (
                    (!seeMoreOpened) ? (
                      <div>
                        <div className="seemore-wrapper" onClick={()=>this.changeseeMoreState()} >
                          <FormattedMessage id="see_more"> </FormattedMessage>
                          <DownArrow/> 
                        </div>
                        {(language.lang==='hu')
                        ? selectedProject.description_hu.substring(0, 400)+"..."
                        : selectedProject.description_en.substring(0, 400)+"..."}
                      </div>
                    ) : (
                      <div>
                        <div className="seemore-wrapper" onClick={()=>this.changeseeMoreState()}>
                             <FormattedMessage id="see_less"> </FormattedMessage>
                             <DownArrow className={classNames({'up' : seeMoreOpened})} /> 
                        </div>
                        {(language.lang==='hu')
                          ? selectedProject.description_hu
                          : selectedProject.description_en
                        }
                      </div>
                    )
                  )
                 )
                 
                }
              </div>
            </div>
          </div>

          <div className="gallery-wrapper">
     				<Carousel hidePanel={true} removeImageData={this.removeImageData} data={addedIdToImages} />
          </div>
        </div>
      )
    :  
    <div className="loading-wrapper">
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


export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(projectEntity));



