import React from 'react';
import { View, Text, Button } from 'react-native';

const Tab3 = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'purple'}}>
      <Text>Tab3</Text>
      <Button title='go home' onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default Tab3;