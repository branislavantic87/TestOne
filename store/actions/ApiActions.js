import { fetch } from '../../helpers';
import { ALL_LOADED, LOADING_MORE, SAVE_INITIAL_ARRAY, UPDATE_ARRAY, UPDATE_PAGE_NUMBER } from './types';

const date = new Date();
date.setDate(date.getDate() - 10)


export const fetchApiData = () => async dispatch => {
    try {
        const data = await fetch.get(`since=${date}&per_page=30&page=1`).then(res => res.data)
        dispatch({ type: SAVE_INITIAL_ARRAY, payload: data })
    } catch (error) {
        console.log('Catch from  fetchApiData: ', error)
    }
}

export const loadMore = () => async (dispatch, getState) => {
    try {
        const state = getState().mainReducer;
        if (state.loadingMore || state.allLoaded) return;
        if (state.pagesLoaded === 7) dispatch({ type: ALL_LOADED, payload: true });
        dispatch({ type: LOADING_MORE, payload: true })
        const fetchedData = await fetch.get(`since=${date}&per_page=30&page=${state.pagesLoaded}`).then(res => res.data)
        if (fetchedData.length > 0) dispatch({ type: UPDATE_ARRAY, payload: fetchedData });
        dispatch({ type: LOADING_MORE, payload: false })
        dispatch({ type: UPDATE_PAGE_NUMBER, payload: state.pagesLoaded + 1 })
    } catch (error) {
        dispatch({ type: LOADING_MORE, payload: false })
        console.log('Catch from loadMore: ', error)
    }
}