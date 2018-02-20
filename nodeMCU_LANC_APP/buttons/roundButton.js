import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export class RoundButton extends React.Component {
  render(){
    const { onPress, value, selected } = this.props;
    const buttonStyle = RoundButtonStyle[selected ? 'selected' : 'unselected'];
    const textStyle = RoundButtonTextStyle[selected ? 'selected' : 'unselected'];
    return (
      <TouchableHighlight onPress={onPress} underlayColor={'transparent'}>
        <View style={[buttonStyle, RoundButtonStyle.global]}>
        <Text style={[textStyle, RoundButtonTextStyle.global]}>{value}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const RoundButtonStyle = {
  global: {
    borderWidth: 3,
    borderRadius: 100,
    width:60,
    height:60,
  },
  selected: {
    backgroundColor: '#FE3562',
    borderColor: "#FE3562",
  },
  unselected: {
    backgroundColor: '#FEFBFB',
    borderColor: "#E6DBDD",
  }
}

const RoundButtonTextStyle = {
  global: {
    fontSize: 40,
    textAlign:'center',
    fontFamily: 'sans-serif'
  },
  selected: {
    color:'#FEFBFB',
  },
  unselected: {
    color:'#433D3E',
  }
}
