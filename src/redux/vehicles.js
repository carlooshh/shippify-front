import * as ActionTypes from "./ActionTypes";

export const Vehicles = (state = { vehicles: [] }, action) => {
  switch (action.type) {
    case ActionTypes.GET_BY_DRIVER:
      var search = action.payload;
      console.log("Search: ", search);
      console.log(action.payload);
      return { ...state, vehicles: action.payload };

    case ActionTypes.ADD_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
      };

    case ActionTypes.UPDATE_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
      };

    default:
      return state;
  }
};
