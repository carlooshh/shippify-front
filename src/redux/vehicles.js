import * as ActionTypes from "./ActionTypes";
import { VEHICLES } from "../shared/vehicles";

export const Vehicles = (state = VEHICLES, action) => {
  switch (action.type) {
    case ActionTypes.GET_BY_DRIVER:
      var search = action.payload;
      console.log("Search: ", search);
      return;
    //   return state.concat(search);

    default:
      return state;
  }
};
