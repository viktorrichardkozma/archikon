import { FETCHED_ABOUT_DATA, FETCHING_ABOUT_DATA} from '../../actions/types';

const initialState={
    about: null,
    isLoading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCHING_ABOUT_DATA:
            return {
                ...state,
                isLoading:true
            };
        case FETCHED_ABOUT_DATA:
            return {
                ...state,
                about: action.about.results,
                isLoading:false
        };
        default:
            return state
    }
}