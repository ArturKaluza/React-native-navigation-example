import React from 'react';
import { View, Text } from 'react-native';

class Tab1 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'darkorange'}} >
        <Text>Tab1</Text>
      </View>
    )
  }
}

export default Tab1;