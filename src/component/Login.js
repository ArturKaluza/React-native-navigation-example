import React from 'react';
import { View, Text, Button } from 'react-native';

const Login = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <Button title='go to app' onPress={() => props.navigation.navigate('App')} />
    </View>
  )
}

export default Login;