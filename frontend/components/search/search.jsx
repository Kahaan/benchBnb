import React from "react";
import BenchMap from "../bench_map/bench_map";
import BenchIndex from "../bench_index";
import FilterForm from "./filter_form";

const Search = ({ benches, fetchBenches, updateBounds }) => {
  return (
    <div>
      <BenchMap updateBounds={updateBounds} benches={benches} />
      <BenchIndex benches={benches} fetchBenches={fetchBenches} />
    </div>
  );
};

export default Search;
