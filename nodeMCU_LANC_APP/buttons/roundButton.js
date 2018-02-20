import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export class RoundButton extends React.Component {
  render(){
    const { onPress, value } = this.props;
    return (
      <TouchableHighlight onPress={onPress} underlayColor={'transparent'}>
        <View style={RoundButtonStyle}>
        <Text style={RoundButtonTextStyle}>{value}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const RoundButtonStyle = {
  backgroundColor: '#FEFBFB',
  borderWidth: 3,
  borderColor: "#E6DBDD",
  borderRadius: 100,
  width:60,
  height:60,
}

const RoundButtonTextStyle = {
  fontSize: 40,
  color:'#433D3E',
  textAlign:'center',
  fontFamily: 'sans-serif'
}
