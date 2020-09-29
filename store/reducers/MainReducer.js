import { ALL_LOADED, LOADING_MORE, SAVE_INITIAL_ARRAY, UPDATE_ARRAY, UPDATE_PAGE_NUMBER } from "../actions/types";


const initialState = { mainDataArray: [], loadingMore: false, allLoaded: false, pagesLoaded: 1 }

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_INITIAL_ARRAY:
            return { ...state, mainDataArray: action.payload };
        case UPDATE_ARRAY:
            return { ...state, mainDataArray: [...state.mainDataArray, ...action.payload] }
        case LOADING_MORE:
            return { ...state, loadingMore: action.payload }
        case ALL_LOADED:
            return { ...state, allLoaded: action.payload }
        case UPDATE_PAGE_NUMBER:
            return { ...state, pagesLoaded: action.payload }
        default:
            return state;
    }
}