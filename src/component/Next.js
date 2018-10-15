import React from 'react';
import { View, Text, Button } from 'react-native';

const Next = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
      <Text>Next</Text>
      <Button title='Next2' onPress={() => props.navigation.navigate('Next2', { transition: 'collapseExpand' })} />
    </View>
  )
}

export default Next;