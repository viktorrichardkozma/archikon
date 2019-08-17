import {combineReducers} from 'redux';
import adminReducer from './admin';
import projectReducer from './project';
import localizationReducer from './localization';

export default combineReducers({
    admin: adminReducer,
    project: projectReducer,
    localization: localizationReducer
});