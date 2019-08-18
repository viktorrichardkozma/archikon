import { FETCHED_PROJECTS_DATA, FETCHED_PROJECT_DATA, FETCHING_PROJECT_DATA, SEARCH_VALUE_DATA, ADD_CATEGORY_FILTER,REMOVE_CATEGORY_FILTER} from '../../actions/types';

const initialState={
    projects: null,
    selectedProject: null,
    isLoading: false,
    filters: [],
    searchvalue: null
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCHING_PROJECT_DATA:
            return {
                ...state,
                isLoading:true
            };
        case FETCHED_PROJECTS_DATA:
            return {
                ...state,
                projects: action.projects.results,
                isLoading:false
        };
        case FETCHED_PROJECT_DATA:
            return {
                ...state,
                selectedProject: action.selectedProject,
                isLoading:false
        };
        case SEARCH_VALUE_DATA:
                return {
                ...state,
                searchvalue: action.payload
            };
        case ADD_CATEGORY_FILTER:
                return {
                ...state,
                filters: [...state.filters, action.payload]
            };
        case REMOVE_CATEGORY_FILTER:
                return {
                ...state,
                filters: state.filters.filter(filter => filter !== action.payload)
            };


        default:
            return state
    }
}