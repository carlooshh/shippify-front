import * as ActionTypes from "./ActionTypes";

export const getByDriver = (search, ß) => ({
  type: ActionTypes.GET_BY_DRIVER,
  payload: {
    search: search,
  },
});
