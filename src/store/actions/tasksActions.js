import { TASKS_REQUEST, TASKS_SUCCESS, TASKS_FAILURE } from "../types";

const { REACT_APP_API_ENDPOINT } = process.env;

export const tasksRequest = () => ({
  type: TASKS_REQUEST,
});
export const tasksSuccess = (data) => ({
  type: TASKS_SUCCESS,
  payload: data,
});
export const tasksFailure = (error) => ({
  type: TASKS_FAILURE,
  payload: error,
});

const tasksActions = (path) => (dispatch) => {
  dispatch(tasksRequest());
  fetch(`${REACT_APP_API_ENDPOINT}/task/${path}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then((response) => response.json)
    .then((data) => {
      dispatch(tasksSuccess(data.result));
    })
    .catch((error) => {
      dispatch(tasksFailure(error));
    });
};

export default tasksActions;
