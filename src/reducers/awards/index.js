import { FETCHED_AWARDS_DATA, FETCHING_AWARDS_DATA} from '../../actions/types';

const initialState={
    awards: null,
    isLoading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCHING_AWARDS_DATA:
            return {
                ...state,
                isLoading:true
            };
        case FETCHED_AWARDS_DATA:
            return {
                ...state,
                awards: action.awards.results,
                isLoading:false
        };
        default:
            return state
    }
}