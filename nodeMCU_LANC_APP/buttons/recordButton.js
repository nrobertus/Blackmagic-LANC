import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';


export class RecordButton extends React.PureComponent {
  render(){
  const { onPress, title } = this.props;
    return (
      <TouchableHighlight onPress={onPress} underlayColor={'transparent'}>
        <View style={recordButtonStyle}>
        <Text> </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const recordButtonStyle = {
  backgroundColor:'#FE3562',
  borderRadius:100,
  borderWidth:15,
  borderColor:'#E6DBDD',
  width:104,
  height: 104
}
