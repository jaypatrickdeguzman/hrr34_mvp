import { combineReducers } from "redux";

const thisReducer = (somethingHere = null, action) => {
  switch (action.type) {
    case "THIS_CASE":
      return action.payload;
    default:
      return somethingHere;
  }
};

export default combineReducers({
  somethingHere: thisReducer
});
