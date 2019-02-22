import React from "react";
import { withRouter } from "react-router";

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      seating: 2,
      latitude: "",
      longitude: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
  }

  navigateToSearch() {
    this.props.history.push("/");
  }

  update(property) {
    return event =>
      this.setState({
        [property]: event.target.value
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("bench[description]", this.state.description);
    formData.append("bench[seating]", this.state.seating);

    formData.append("bench[latitude]", this.state.latitude);
    formData.append("bench[longitude]", this.state.longitude);

    this.props.createBench(formData);
    this.navigateToSearch();
  }

  render() {
    const { description, seating, latitude, longitude } = this.state;

    return (
      <div className="new-bench-container">
        <div className="new-bench-form">
          <h3 className="new-bench-title">Create A Bench!</h3>

          <form onSubmit={this.handleSubmit}>
            <label className="bench-field">Description</label>
            <input
              type="text"
              value={description}
              onChange={this.update("description")}
              className="bench-field"
            />

            <label className="bench-field">Number of Seats</label>
            <input
              min="0"
              type="number"
              value={seating}
              onChange={this.update("seating")}
              className="bench-field"
            />

            <label className="bench-field">Latitude</label>
            <input type="text" value={latitude} className="bench-field" />

            <label className="bench-field">Longitude</label>
            <input type="text" value={longitude} className="bench-field" />

            <div className="button-holder">
              <input
                type="submit"
                value="Create Bench"
                className="new-bench-button"
              />
            </div>
          </form>

          <div className="button-holder">
            <button
              className="new-bench-button"
              onClick={this.navigateToSearch}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BenchForm);
