import {combineReducers} from 'redux';
import staffReducer from './staff';
import awardsReducer from './awards';
import projectReducer from './project';
import localizationReducer from './localization';
import slideshowReducer from './slideshow'

export default combineReducers({
    project: projectReducer,
    slideshow: slideshowReducer,
    staff: staffReducer,
    localization: localizationReducer,
    awards: awardsReducer
});