/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  MapView,
  Text
} from 'react-native';

export default class weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      pin: {
        latitude: 0,
        longitude: 0
      }
    };
  }


  render() {
    return (
      <MapView
        style={styles.map}
        onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
        annotations={[this.state.pin]}
        >

      </MapView>
    );
  }

  onRegionChangeComplete(region){
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    })

  }

}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => weather);
