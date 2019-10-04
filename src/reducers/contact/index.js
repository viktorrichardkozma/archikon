import { FETCHED_CONTACT_DATA, FETCHING_CONTACT_DATA} from '../../actions/types';

const initialState={
    contact: null,
    isLoading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCHING_CONTACT_DATA:
            return {
                ...state,
                isLoading:true
            };
        case FETCHED_CONTACT_DATA:
            return {
                ...state,
                contact: action.contact.results[0],
                isLoading:false
        };
        default:
            return state
    }
}
