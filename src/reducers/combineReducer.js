import {combineReducers} from 'redux';
import staffReducer from './staff';
import awardsReducer from './awards';
import projectReducer from './project';
import localizationReducer from './localization';

export default combineReducers({
    project: projectReducer,
    staff: staffReducer,
    localization: localizationReducer,
    awards: awardsReducer
});