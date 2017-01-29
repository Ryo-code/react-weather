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
  render() {
    return (
      <MapView
        style={styles.map}
        onRegionChangeComplete={this.onRegionChangeComplete}
        >

      </MapView>
    );
  }

  onRegionChangeComplete(region){
    console.log(region)
  }

}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => weather);
