import React from "react";

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      benches: ""
    };
  }

  componentDidMount() {
    const benches = this.props.benches;
    this.setState({ benches });
  }

  render() {
    return <div />;
  }
}

export default BenchIndex;
