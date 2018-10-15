import React from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import  SignInScreen from './src/component/Auth';
import Login from './src/component/Login';

import Home from './src/component/Home';
import Next from './src/component/Next';
import Next2 from './src/component/Next2';

import Tab1 from './src/component/Tab1';
import Tab2 from './src/component/Tab2';
import Tab3 from './src/component/Tab3';

import { TransitionConfiguration } from './src/Transition';

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AuthenticationNavigator = createStackNavigator({
  SignIn: SignInScreen,
  Login: Login
});

const TabNav = createMaterialTopTabNavigator({
  tab1: Tab1,
  tab2: Tab2,
  tab3: Tab3
}, {
  tabBarPosition: 'bottom',
  lazy: true
});

const MainNav = createStackNavigator({
  Home: Home,
  Next: Next,
  Next2: Next2
}, {
  transitionConfig: TransitionConfiguration
});

class AuthenticationScreen extends React.Component {
  static router = AuthenticationNavigator.router;

  render() {
    return (
      <AuthenticationNavigator navigation={this.props.navigation} />
    );
  }
}

// class AppScreens extends React.Component {
//   static router = MainNav.router

//   render() {
//     return (
//       <MainNav navigation={this.props.navigation} />
//     )
//   }
// }

const AppNavigator = createSwitchNavigator({
  Auth: AuthenticationScreen, 
  App: MainNav,
  Tab: TabNav  
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


