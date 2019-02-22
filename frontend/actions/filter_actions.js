import { fetchBenches } from "./bench_actions";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});

export function updateFilter(filter, value) {
  return (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchBenches(getState().filters)(dispatch);
  };
}
