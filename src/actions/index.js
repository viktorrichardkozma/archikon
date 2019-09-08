import axios from 'axios';

import {
   FETCHED_STAFF_DATA,
   FETCHING_STAFF_DATA,
   FETCHING_PROJECT_DATA,
   FETCHED_PROJECTS_DATA,
   FETCHED_PROJECT_DATA,
   FETCHED_AWARDS_DATA,
   FETCHING_AWARDS_DATA,
   FETCHED_ABOUT_DATA,
   FETCHING_ABOUT_DATA,
   FETCHED_SLIDESHOW_DATA,
   FETCHING_SLIDESHOW_DATA,
   SEARCH_VALUE_DATA,
   ADD_CATEGORY_FILTER,
   REMOVE_CATEGORY_FILTER,
   LOCALE_SET,
   ERROR
} from './types';

const BASE_URL = 'https://teszt.archikon.hu/api';

const sortByOrder = (a, b) => {
    if (a['order'] < b['order']) return -1;
    if (a['order'] > b['order']) return 1;
    return 0;
};

// PROJECTS ALL
export const fetchingProjects = () => (dispatch) => {
    dispatch(loadingProject());
    axios.get(`${BASE_URL}/projects/`)
        .then(data => dispatch(fetchedProjects(data)))
        .catch(err=>
            dispatch({
                type: ERROR,
                payload: err.data
            })
    );
}

export function fetchedProjects(data) {
    data.data.results.sort(sortByOrder)
    return {
      type: FETCHED_PROJECTS_DATA,
      projects: data.data
    };
}

// PROJECTS SINGLE
export const fetchingProject = (id) => (dispatch) => {
    dispatch(loadingProject());
    axios.get(`${BASE_URL}/projects/'+id+'/`)
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

const loadingProject = () => (dispatch) => {
    dispatch({
        type: FETCHING_PROJECT_DATA
    })
}


// STAFF
export const fetchingStaff = () => (dispatch) => {
    dispatch(loadingStaff());
    axios.get(`${BASE_URL}/staff/`)
        .then(data => dispatch(fetchedStaff(data)))
        .catch(err=>
            dispatch({
                type: ERROR,
                payload: err.data
            })
    );
}

//LOADING
const loadingStaff = () => (dispatch) => {
    dispatch({
        type: FETCHING_STAFF_DATA
    })
}

export function fetchedStaff(data) {
    data.data.results.sort(sortByOrder)
    return {
      type: FETCHED_STAFF_DATA,
      staff: data.data
    };
}


// AWARDS
export const fetchingAwards = () => (dispatch) => {
    dispatch(loadingAwards());
    axios.get(`${BASE_URL}/awards/`)
        .then(data => dispatch(fetchedAwards(data)))
        .catch(err=>
            dispatch({
                type: ERROR,
                payload: err.data
            })
    );
}

const loadingAwards = () => (dispatch) => {
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


// ABOUT
export const fetchingAbout = () => (dispatch) => {
    dispatch(loadingAbout());
    axios.get(`${BASE_URL}/about/`)
        .then(data => dispatch(fetchedAbout(data)))
        .catch(err=>
            dispatch({
                type: ERROR,
                payload: err.data
            })
    );
}

const loadingAbout = () => (dispatch) => {
    dispatch({
        type: FETCHING_ABOUT_DATA
    })
}

export function fetchedAbout(data) {
    return {
      type: FETCHED_ABOUT_DATA,
      about: data.data
    };
}


// SLIDESHOW
export const fetchingSlideshow = () => (dispatch) => {
    dispatch(loadingSlideshow());
    axios.get(`${BASE_URL}/slideshows/`)
        .then(data => dispatch(fetchedSlideshow(data)))
        .catch(err=>
            dispatch({
                type: ERROR,
                payload: err.data
            })
    );
}

const loadingSlideshow = () => (dispatch) => {
    dispatch({
        type: FETCHING_SLIDESHOW_DATA
    })
}

export function fetchedSlideshow(data) {
    data.data.results.sort(sortByOrder)
    return {
      type: FETCHED_SLIDESHOW_DATA,
      slideshow: data.data
    };
}

export const addSearchValue = (search) => (dispatch) => {
    dispatch({
        type: SEARCH_VALUE_DATA,
        payload: search
    })
}


// FILTERS
export const addCategoryFilter = (filter) => (dispatch) => {
    dispatch({
        type: ADD_CATEGORY_FILTER,
        payload: filter
    })
}


export const removeCategoryFilter = (filter) => (dispatch) => {
    dispatch({
        type: REMOVE_CATEGORY_FILTER,
        payload: filter
    })
}


// LANGUAGES
export const localeSet = (lang) => ({
    type: LOCALE_SET,
    lang
})

export const setLocale = (lang) => (dispatch) => {
    localStorage.alhubLang = lang

    dispatch(localeSet(lang))
}

