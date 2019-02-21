import { connect } from "react-redux";
import React from "react";
import Search from "./search";
import { fetchBenches } from "../../actions/bench_actions";
import { updateBounds } from "../../actions/filter_actions";
import { asArray } from "../../reducers/selectors";

const mapStateToProps = state => ({
  benches: asArray(state.entities)
});
const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
