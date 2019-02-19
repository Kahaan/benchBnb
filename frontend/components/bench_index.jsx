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
    this.setState({ benches: this.props.benches });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.benches !== this.props.benches)
      this.setState({ benches: this.props.benches });
  }

  render() {
    const benches = this.props.benches;
    const benchKeys = Object.keys(benches);
    return (
      <div>
        <h1>Bench index component</h1>
        <ul>{benchKeys.map(key => benches[key].id)}</ul>
      </div>
    );
  }
}

export default BenchIndex;
