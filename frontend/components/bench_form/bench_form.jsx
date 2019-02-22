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
  }

  update(property) {
    return event =>
      this.setState({
        [property]: event.target.value
      });
  }

  render() {
    const { description, seating, latitude, longitude } = this.state;

    return (
      <div className="new-bench-container">
        <div className="new-bench-form">
          <h3 className="new-bench-title">Create A Bench!</h3>

          <form>
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
            <input type="text" disabled value={lat} className="bench-field" />

            <label className="bench-field">Longitude</label>
            <input type="text" disabled value={lng} className="bench-field" />

            <div className="button-holder">
              <h3>Image preview </h3>
              {preview}
              <h3 className="button-holder">Add a Picture</h3>
              <input
                type="file"
                className="new-bench-button"
                onChange={this.handleFile.bind(this)}
              />
            </div>

            <hr />

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
