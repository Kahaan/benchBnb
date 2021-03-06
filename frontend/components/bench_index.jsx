import React from "react";
import BenchIndexItem from "./bench_index_item";

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      benches: ""
    };
  }

  componentDidMount() {
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
        <ul>
          {benchKeys.map(key => (
            <BenchIndexItem key={key} bench={benches[key]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default BenchIndex;
