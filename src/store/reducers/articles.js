import types from "../actionTypes";
const initialState = {
  list: []
};
export default (state = initialState, { type, list = [], errMsg = "" }) => {
  switch (type) {
    case types.ARTICLES_FETCH_SUCCEEDED:
      return { ...state, list };
    case types.ARTICLES_FETCH_FAILED:
      console.log("errMsg: ", errMsg);
      return initialState;
    default:
      return state;
  }
};
