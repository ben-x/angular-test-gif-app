import * as actionType from "./../actions/types";
const initialState = {
    giphysImages: [],
    giphy: {},
};

const giphys = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCHGIPHYS:
            return Object.assign({}, state, {
                giphysImages: action.payload,
            });
        case actionType.FETCHMOREGIPHYS:
            return Object.assign({}, state, {
                giphysImages: [...state.giphysImages, ...action.payload],
            });
        case actionType.FETCHONEGIPHY:
            return Object.assign({}, state, {
                giphy: action.payload,
            });
        default:
            return state;
    }
};
export default giphys;
