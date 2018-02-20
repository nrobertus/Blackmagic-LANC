import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import wifi from 'react-native-android-wifi';
import { RecordButton } from './buttons/recordButton';
import { SquareButton } from './buttons/squareButton';
import { RoundButton } from './buttons/roundButton';

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
        <View style={statusStyle}>
          <Text> </Text>
        </View>
        <View style={buttonGroupStyle}>
          <View></View>
          <View></View>
          <RoundButton value="F" side="left" onPress={this.handlePressFocus}/>
          <SquareButton value="A" onPress={this.handlePressAuto}/>
          <RoundButton value="I" side="right" onPress={this.handlePressIris}/>
          <View></View>
          <View></View>
        </View>
        <View style={buttonGroupStyle}>
          <View></View>
          <SquareButton value="-" onPress={this.handlePressMinus}/>
          <RecordButton onPress={this.handlePressRecord} />
          <SquareButton value="+" onPress={this.handlePressPlus}/>
          <View></View>
        </View>
      </View>
    );
  }
}

const statusStyle = {
  height:'70%'
}

const mainViewStyle = {
  backgroundColor: '#FEFBFB',
  height:'100%',
  width:'100%',
  flex: 1,
  flexDirection: 'column',
}

const buttonGroupStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingBottom:10,
}
