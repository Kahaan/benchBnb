import React from "react";

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

export default BenchMap;
