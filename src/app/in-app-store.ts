import { GIF_SEARCH_ERR, GET_ALL_RESPONSES } from './actions';
// State intterface
export interface IAppState {
    allResults;
    err: string;
    keywords;
}

// initial state of the app
export const INITIAL_STATE: IAppState = {
    allResults: [],
    err: '',
    keywords: []
};

// rootReducer
export function rootReducer(state: IAppState, action): IAppState {
    switch(action.type) {
        case GIF_SEARCH_ERR:
            return Object.assign({}, state, {
                err: action.err
            });
        case GET_ALL_RESPONSES:
            return Object.assign({}, state, {
                allResults: action.allResults,
                err: action.err,
                keywords: state.keywords.concat(Object.assign({}, action.keywords))
            });
    }
    return state;
}
