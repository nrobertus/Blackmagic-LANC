import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export class SquareButton extends React.Component {
  render(){
    const { onPress, value } = this.props;
    return(
      <TouchableHighlight onPress={onPress} underlayColor={'transparent'}>
        <View style={SquareButtonStyle.button}>
        <Text style={SquareButtonStyle.text}>{value}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const SquareButtonStyle = {
  button: {
    backgroundColor: '#433D3E',
    borderRadius: 15,
    width:60,
    height:60
  },
  text: {
    fontSize: 40,
    color:'#FEFBFB',
    textAlign:'center',
    fontFamily: 'sans-serif'
  }
}
