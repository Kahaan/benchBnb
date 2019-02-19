import React from "react";

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      benches: ""
    };
  }

  componentDidMount() {
    const benches = this.props.fetchBenches();
    this.setState({ benches });
  }

  render() {
    const benches = this.state.benches || { 1: "" };
    return (
      <div>
        <h1>Bench index component</h1>
        {this.state.benches}
      </div>
    );
  }
}

export default BenchIndex;
