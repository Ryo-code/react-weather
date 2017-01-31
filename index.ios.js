/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Api from './src/api';
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
      },
      city: '',
      temperature: '',
      description: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
          annotations={[this.state.pin]}
        >
        </MapView>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>City: {this.state.city}</Text>
          <Text style={styles.text}>Temperature: {this.state.temperature}</Text>
          <Text style={styles.text}>Forecast: {this.state.description}</Text>
        </View>
      </View>
    );
  }

  onRegionChangeComplete(region){
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    });

    //whenever the map stops being dragged, the API is called
    Api(region.latitude, region.longitude)
      .then((data) => {
        console.log('dataaaaaa', data);
        this.setState(data);
      });

  }

}

const styles = StyleSheet.create({
  map: {
    flex: 2,
    marginTop: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 25
  }
});

AppRegistry.registerComponent('weather', () => weather);
