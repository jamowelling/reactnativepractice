// Import some code we need
import React, { Component } from 'react';
import Moment from 'moment';
import { View, AppRegistry, Text, StyleSheet } from 'react-native';
import DayItem from './src/day-item';

// Create a react Component
export default class Weekdays extends Component {
  days() {
    let daysItems = []

    for(var i = 0; i < 7; i++) {
      let day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} key={i}/>
      )
    }
    return daysItems
  }
    render() {
      return <View style={styles.container}>
        {this.days()}
      </View>
    }
  };

// Style the React component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Moves stuff heightwise
    alignItems: 'center' // Moves stuff widthwise
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('AwesomeProject', () => Weekdays );
