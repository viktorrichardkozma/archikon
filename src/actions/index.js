import axios from 'axios';
import {FETCHING_PROJECTS_DATA, FETCHED_PROJECTS_DATA, FETCHED_PROJECT_DATA, LOCALE_SET, ERROR} from './types';

//PROJECTS ALL
export const fetchingProjects = () => dispatch => {
    dispatch(loadingProject());
    axios.get('http://92.119.123.89/projects/')
        .then(data => dispatch(fetchedProjects(data)))
        .catch(err=>
            dispatch({
                type: ERROR,
                payload: err.data
            })
    );
}

export function fetchedProjects(data) {
    return {
      type: FETCHED_PROJECTS_DATA,
      projects: data.data
    };
}

//PROJECTS ID
export const fetchingProject = (id) => dispatch => {
    dispatch(loadingProject());
    axios.get('http://92.119.123.89/projects/'+id+'/')
        .then(data => dispatch(fetchedProject(data)))
        .catch(err=>
            dispatch({
                type: ERROR,
                payload: err.data
            })
    );
}

const fetchedProject = (data) => {
    return {
        type: FETCHED_PROJECT_DATA,
        selectedProject: data.data
    }
}

//LOADING
const loadingProject = () => dispatch => {
    dispatch({
        type: FETCHED_PROJECT_DATA
    })
}

//LANGUAGES
export const localeSet = lang  => ({
    type: LOCALE_SET,
    lang
})

export const setLocale = lang => dispatch => { 
    localStorage.alhubLang=lang
    dispatch(localeSet(lang))
}

