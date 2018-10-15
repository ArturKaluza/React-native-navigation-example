import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
      <Text>Home</Text>
      <Button title='try go back' onPress={() => props.navigation.goBack()} />
      <Button title='go to auth' onPress={() => props.navigation.navigate('Auth')} />
      <Button title='Next' onPress={() => props.navigation.navigate('Next')} />
      <Button title='TabNav' onPress={() => props.navigation.navigate('Tab')} />
    </View>
  )
}

export default Home;