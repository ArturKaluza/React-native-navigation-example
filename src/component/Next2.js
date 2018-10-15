import React from 'react';
import { View, Text, Button } from 'react-native';

const Next2 = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'}}>
      <Text>Next2</Text>
      <Button title='Home' onPress={() => props.navigation.navigate('Home', { transition: 'SlidFromRight'})} />
    </View>
  )
}

export default Next2;