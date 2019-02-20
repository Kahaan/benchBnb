import React from "react";

class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BenchIndexItem">
        <h4>{this.props.bench.id}</h4>
        <h4>{this.props.bench.description}</h4>
        <br />
      </div>
    );
  }
}

export default BenchIndexItem;
