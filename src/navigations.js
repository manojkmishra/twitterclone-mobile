import React, { Component } from 'react';
import {  addNavigationHelpers,  StackNavigator,  TabNavigator,} from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
const AppMainNav = StackNavigator(
  {  Home: { screen :  HomeScreen}
  });

class AppNavigator extends Component 
{  render() {  const nav = addNavigationHelpers(
                  {  dispatch: this.props.dispatch,
                     state: this.props.nav,
                 });
               return <AppMainNav navigation={nav} />;
            }
}

export default connect(state => ({ nav: state.nav,}))(AppNavigator);

export const router = AppMainNav.router;

//---just by connecting we can write dispatch inside render---then take state from here and pass it in dispatch

