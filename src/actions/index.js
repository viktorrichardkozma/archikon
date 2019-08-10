import axios from 'axios';
import {FETCHING_PROJECTS_DATA, FETCHED_PROJECTS_DATA, LOCALE_SET, ERROR} from './types';

//PROJECTS
export const fetchingProjects = () => dispatch => {
    dispatch(loadingProjects());
    axios.get('https://360-selfie.now.sh/events')
        .then(data => fetchedProjects(data))
        .catch(err=>
            dispatch({
                type: ERROR,
                payload: err.data
            })
    );
}

export const loadingProjects = () => dispatch => {
    dispatch({
        type: FETCHING_PROJECTS_DATA
    })
}

export const getMenuState = () => dispatch => {
    dispatch({
        type: FETCHING_PROJECTS_DATA
    })
}

export function fetchedProjects(data) {
    return {
      type: FETCHED_PROJECTS_DATA,
      projects: data,
    };
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

