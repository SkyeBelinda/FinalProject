import React from 'react'
import {Map, Marker, InfoWindow} from 'google-maps-react';

class MainMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2 box">
          <Map google={window.google}
            style={{width: '30%', height: '50%', position: 'relative', margin: '10px'}}
            onClick={this.onMapClicked}
            className={'map'}
            zoom={12}
            initialCenter={{
              lat: -41.30270005,
              lng: 174.77488518
            }}
            >
            {this.props.restaurants.map((restaurant, key) =>
              <Marker
                key={key}
                title={restaurant.restaurant_name}
                name={restaurant.restaurant_name}
                description={restaurant.address}
                onClick={this.onMarkerClick}
                position={{lat:restaurant.lat, lng:restaurant.lng}} />
            )}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
                <p>{this.state.selectedPlace.description}</p>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}


export default MainMap





// https://github.com/fullstackreact/google-maps-react
