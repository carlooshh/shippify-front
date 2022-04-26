import { baseUrl } from "../shared/baseUrl";
import * as ActionTypes from "./ActionTypes";

export const getByDriver = (search, ß) => ({
  type: ActionTypes.GET_BY_DRIVER,
  payload: {
    search: search,
  },
});

// export const addVehicles = (vehicles) => ({
//   type: ActionTypes.GET_BY_DRIVER,
//   payload: vehicles,
// });

export const fetchVehicles = (query) => (dispatch) => {
  const { page, limit, search } = query;
  let url = `${baseUrl}vehicle/?page=${page}&limit=${limit}`;
  if (search) url += `&search=${search}`;

  return fetch(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  })
    .then(
      (response) => {
        console.log(response);
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        console.log(error);
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      dispatch(addVehicles(response.data));
    });
};

export const addVehicles = (vehicles) => ({
  type: ActionTypes.ADD_VEHICLES,
  payload: vehicles,
});
