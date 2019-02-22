import React from "react";
import { withRouter } from "react-router-dom";
import MarkerManager from "../../util/marker_manager.js";

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate(prevProps, prevState) {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateBounds(bounds);
    });

    google.maps.event.addListener(this.map, "click", event => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: "benches/new",
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return (
      <div>
        <div>
          <div ref="map" />
        </div>
        <div>
          <div className="map-container" ref={map => (this.mapNode = map)} />
        </div>
      </div>
    );
  }
}

export default withRouter(BenchMap);
