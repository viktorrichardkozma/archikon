import {combineReducers} from 'redux';
import staffReducer from './staff';
import awardsReducer from './awards';
import projectReducer from './project';
import aboutReducer from './about';
import localizationReducer from './localization';
import slideshowReducer from './slideshow'
import contactReducer from './contact'

export default combineReducers({
    project: projectReducer,
    slideshow: slideshowReducer,
    staff: staffReducer,
    localization: localizationReducer,
    awards: awardsReducer,
    about: aboutReducer,
    contact: contactReducer,
});
