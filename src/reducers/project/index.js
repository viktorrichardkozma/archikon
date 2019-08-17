import { FETCHED_PROJECTS_DATA, FETCHED_PROJECT_DATA, FETCHING_PROJECT_DATA} from '../../actions/types';

const initialState={
    projects: null,
    selectedProject: null,
    isLoading: false
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
        default:
            return state
    }
}