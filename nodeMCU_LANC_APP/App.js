import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import wifi from 'react-native-android-wifi';
import { RecordButton } from './buttons/recordButton';
import { SquareButton } from './buttons/squareButton';

export default class App extends React.Component {
  handlePressAuto(){
    alert("AUTO");
  }
  handlePressIris(){
    alert("IRIS");
  }
  handlePressFocus(){
    alert("FOCUS");
  }
  handlePressPlus(){
    alert("PLUS");
  }
  handlePressMinus(){
    alert("MINUS");
  }
  handlePressRecord(){
    alert("Record");
  }
  render() {
    return (
      <View style={mainViewStyle}>
        <View style={buttonGroupStyle}>
          <SquareButton value="-" onPress={this.handlePressMinus}/>
          <RecordButton onPress={this.handlePressRecord} />
          <SquareButton value="+" onPress={this.handlePressPlus}/>
        </View>
      </View>
    );
  }
}

const mainViewStyle = {
  backgroundColor: '#FEFBFB',
  height:'100%',
  width:'100%',
  flex:1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
const buttonGroupStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingBottom:10
}
