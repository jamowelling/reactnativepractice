// Import some code we need
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

// Create our Component
export default class DayItem extends Component {
  color() {
    // let opacity = 1 / this.props.daysUntil
    return 'rgb(0, 0, 0)'
  }
  // fontWeight() {
  //   return ( 7 - this.props.daysUntil) * 100
  // }
  fontSize() {
    return 60 - 6 * this.props.daysUntil
  }
  lineHeight() {
    return 70 - 4 * this.props.daysUntil
  }
  style() {
    return {
      color: this.color(),
      // fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }

  render() {
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  }
}

// Style our Component
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
})

// Make this code available elsewhere
