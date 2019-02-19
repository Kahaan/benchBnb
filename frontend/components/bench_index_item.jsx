import React from "react";

class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bench: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.benches !== this.props.benches)
      this.setState({ benches: this.props.benches });
  }

  render() {
    return (
      <div>
        <h1>{this.state.bench.id}</h1>
        <h1>{this.state.bench.description}</h1>
      </div>
    );
  }
}

export default BenchIndexItem;
