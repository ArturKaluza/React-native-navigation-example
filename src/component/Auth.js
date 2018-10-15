import React from 'react';
import { View, Text, Button } from 'react-native';

class Auth extends React.Component {
  static navigationOptions = {
    header: null
} 
  
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Auth</Text>
        <Button title='Login' onPress={() => this.props.navigation.navigate('Login')} />
      </View>
    )
  }
}

export default Auth;