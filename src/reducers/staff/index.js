import { FETCHED_STAFF_DATA, FETCHING_STAFF_DATA} from '../../actions/types';

const initialState={
    staff: null,
    isLoading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCHING_STAFF_DATA:
            return {
                ...state,
                isLoading:true
            };
        case FETCHED_STAFF_DATA:
            return {
                ...state,
                staff: action.staff.results,
                isLoading:false
        };
        default:
            return state
    }
}