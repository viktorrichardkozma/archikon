import { FETCHED_SLIDESHOW_DATA, FETCHING_SLIDESHOW_DATA} from '../../actions/types';

const initialState={
    slideshow: null,
    isLoading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCHING_SLIDESHOW_DATA:
            return {
                ...state,
                isLoading:true
            };
        case FETCHED_SLIDESHOW_DATA:
            return {
                ...state,
                slideshow: action.slideshow.results,
                isLoading: false
        };
        default:
            return state
    }
}