import axios from 'axios';
import {
   FETCHED_STAFF_DATA,
   FETCHING_STAFF_DATA,
   FETCHING_PROJECT_DATA,
   FETCHED_PROJECTS_DATA,
   FETCHED_PROJECT_DATA,
   FETCHED_AWARDS_DATA,
   FETCHING_AWARDS_DATA,
   FETCHED_SLIDESHOW_DATA,
   FETCHING_SLIDESHOW_DATA,
   SEARCH_VALUE_DATA,
   ADD_CATEGORY_FILTER,
   REMOVE_CATEGORY_FILTER,
   LOCALE_SET,
   ERROR} from './types';

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
        type: FETCHING_PROJECT_DATA
    })
}


//STAFF

export const fetchingStaff = () => dispatch => {
    dispatch(loadingStaff());
    axios.get('http://92.119.123.89/staff/')
        .then(data => dispatch(fetchedStaff(data)))
        .catch(err=>
            dispatch({
                type: ERROR,
                payload: err.data
            })
    );
}

//LOADING
const loadingStaff = () => dispatch => {
    dispatch({
        type: FETCHING_STAFF_DATA
    })
}

export function fetchedStaff(data) {
    return {
      type: FETCHED_STAFF_DATA,
      staff: data.data
    };
}


//AWARDS

export const fetchingAwards = () => dispatch => {
    dispatch(loadingAwards());
    axios.get('http://92.119.123.89/awards/')
        .then(data => dispatch(fetchedAwards(data)))
        .catch(err=>
            dispatch({
                type: ERROR,
                payload: err.data
            })
    );
}

//LOADING
const loadingAwards = () => dispatch => {
    dispatch({
        type: FETCHING_AWARDS_DATA
    })
}

export function fetchedAwards(data) {
    return {
      type: FETCHED_AWARDS_DATA,
      awards: data.data
    };
}



//SLIDESHOW

export const fetchingSlideshow = () => dispatch => {
    dispatch(loadingSlideshow());
    axios.get('http://92.119.123.89/slideshows/')
        .then(data => dispatch(fetchedSlideshow(data)))
        .catch(err=>
            dispatch({
                type: ERROR,
                payload: err.data
            })
    );
}

//LOADING
const loadingSlideshow = () => dispatch => {
    dispatch({
        type: FETCHING_SLIDESHOW_DATA
    })
}

export function fetchedSlideshow(data) {
    return {
      type: FETCHED_SLIDESHOW_DATA,
      slideshow: data.data
    };
}



export const addSearchValue = (search) => dispatch => {
    dispatch({
        type: SEARCH_VALUE_DATA,
        payload: search
    })
}


//FILTERS


export const addCategoryFilter = (filter) => dispatch => {
    dispatch({
        type: ADD_CATEGORY_FILTER,
        payload: filter
    })
}


export const removeCategoryFilter = (filter) => dispatch => {
    dispatch({
        type: REMOVE_CATEGORY_FILTER,
        payload: filter
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

