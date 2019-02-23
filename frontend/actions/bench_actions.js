import * as APIUtil from "../util/bench_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";
export const UPDATE_FILTER = "UPDATE_FILTER";

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
});

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const fetchBenches = () => dispatch =>
  APIUtil.fetchBenches().then(benches => dispatch(receiveBenches(benches)));

export const createBench = bench => dispatch =>
  APIUtil.createBench(bench).then(bench => dispatch(receiveBench(bench)));
