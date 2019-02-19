import React from "react";

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      benches: ""
    };
  }

  componentDidMount() {
    // const benches = this.props.benches;
    // this.setState({ benches });
  }

  render() {
    // const benches = this.state.benches;

    return (
      // <div>
      //   {Object.keys(this.state.benches).map((key, i) => (
      //     <li>{benches[key]}</li>
      //   ))}
      // </div>
    );
  }
}

export default BenchIndex;
