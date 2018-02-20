import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import wifi from 'react-native-android-wifi';
import { RecordButton } from './buttons/recordButton';
import { SquareButton } from './buttons/squareButton';
import { RoundButton } from './buttons/roundButton';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {iris:false, focus: true, connected: false};
    this.handlePressAuto = this.handlePressAuto.bind(this);
    this.handlePressIris = this.handlePressIris.bind(this);
    this.handlePressFocus = this.handlePressFocus.bind(this);
    this.handlePressPlus = this.handlePressPlus.bind(this);
    this.handlePressMinus = this.handlePressMinus.bind(this);
    this.handlePressRecord = this.handlePressRecord.bind(this);
  }
  componentDidMount(){
    this._interval = setInterval(() => {
      this.sendFetchCommand('status');
    }, 1000);
  }
  handlePressAuto(){
    if(this.state.focus === true){
      this.sendFetchCommand('focus_auto');
    } else {
      this.sendFetchCommand('iris_auto');
    }
  }
  handlePressIris(){
    this.setState({iris: true, focus: false});
  }
  handlePressFocus(){
    this.setState({iris: false, focus: true});
  }
  handlePressPlus(){
    if(this.state.focus === true){
      this.sendFetchCommand('focus_far');
    } else {
      this.sendFetchCommand('iris_increment')
    }
  }
  handlePressMinus(){
    if(this.state.focus === true){
      this.sendFetchCommand('focus_near');
    } else {
      this.sendFetchCommand('iris_decrement');
    }
  }
  handlePressRecord(){
    this.sendFetchCommand('rec');
  }
  sendFetchCommand(command){
    fetch("http://42.42.42.42/" + command)
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson === 'Success'){
        this.setState({connected: true});
      }
      else {
        this.setState({connected: false});
      }
    })
    .catch((error) => {
      this.setState({ connected: false});
    });
  }
  render() {
    const cameraImage = imageSource[this.state.connected ? 'connected' : 'disconnected']
    return (
      <View style={mainViewStyle}>
        <View style={statusStyle}>
          <Image source={cameraImage} style={[imageStyle.global, this.state.connected ? imageStyle.connected: imageStyle.disconnected ]}/>
        </View>
        <View style={buttonGroupStyle}>
          <View></View>
          <View></View>
          <RoundButton value="F" side="left" selected={this.state.focus} onPress={this.handlePressFocus}/>
          <SquareButton value="A" onPress={this.handlePressAuto}/>
          <RoundButton value="I" side="right" selected={this.state.iris} onPress={this.handlePressIris}/>
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

const imageSource = {
  'connected': require('./img/camera_red.png'),
  'disconnected' : require('./img/camera.png')
}

const statusStyle = {
  height:'70%',
  width:'100%',
}

const imageStyle = {
  global: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'auto',
    marginBottom:'auto',
    flex: 1,
    width:'80%',
    resizeMode: 'contain'
  },
  connected: {
    opacity: 1,
  },
  disconnected: {
    opacity: 0.5
  }
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
  paddingBottom:20,
}
