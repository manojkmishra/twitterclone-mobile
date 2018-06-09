import React, { Component } from 'react';
import {  addNavigationHelpers,  StackNavigator,  TabNavigator,} from 'react-navigation';
import { connect } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { colors } from './utils/constants';
import { FontAwesome, SimpleLineIcons, EvilIcons } from '@expo/vector-icons';
import ExploreScreen from './screens/ExploreScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';
import HeaderAvatar from './components/HeaderAvatar';
import ButtonHeader from './components/ButtonHeader';
import NewTweetScreen from './screens/NewTweetScreen';
import { Keyboard } from 'react-native';

const TAB_ICON_SIZE = 20;
const Tabs = TabNavigator(
  { Home1: {  screen: HomeScreen,    
               navigationOptions: () => ({ headerTitle: 'Home1Title', tabBarIcon: ({ tintColor }) =>
                                            <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="home" />,
                                         }),
            },
    Explore: { screen: ExploreScreen, navigationOptions: () => ({ headerTitle: 'Explore', tabBarIcon: ({ tintColor }) =>
                                                     <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="search" />,
                                                         }),
             },
    Notifications: { screen: NotificationsScreen, navigationOptions: () => ({  headerTitle: 'Notifications',
                                                   tabBarIcon: ({ tintColor }) => <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="bell" />,
                                                   }),
                  },
     Profile: {screen: ProfileScreen, navigationOptions: () => ({ headerTitle: 'Profile',
                                                 tabBarIcon: ({ tintColor }) =><FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="user" />,
                                                           }),
              },
  },
  { lazy: true, tabBarPosition: 'bottom', swipeEnabled: false,
    tabBarOptions: { showIcon: true, showLabel: false, activeTintColor: colors.PRIMARY, inactiveTintColor: colors.LIGHT_GRAY,
                     style: { backgroundColor: colors.YELLOW, height: 50, paddingVertical: 5,},
                   },
  },
);
//--------------------------------------------------------------------
const NewTweetModal = StackNavigator(
  {  NewTweet: 
     { screen: NewTweetScreen,
       navigationOptions: ({ navigation }) => (
         {  headerLeft: <HeaderAvatar />,
            headerRight: (  <ButtonHeader side="right" onPress={() => {  Keyboard.dismiss();  navigation.goBack(null);  }} >
                              <EvilIcons color={colors.PRIMARY} size={25} name="close" />
                            </ButtonHeader>
                         ),
         }),
    },
  },
  {headerMode: 'none',},
);
//--------------------------------------------------------------------
const AppMainNav = StackNavigator(
  {  Home: { screen :  Tabs,
              navigationOptions: ({ navigation }) => (
                { headerLeft: <HeaderAvatar/>,
                  headerRight: ( <ButtonHeader  side="right" onPress= {() => navigation.navigate('NewTweet')} >
                                   <SimpleLineIcons color={colors.PRIMARY} size={20} name="pencil" />
                                 </ButtonHeader>
                               ),
                 })
           },
     NewTweet: {  screen: NewTweetModal,},
  },
  { cardStyle: { backgroundColor: '#F1F6FA', },
    navigationOptions: () => (
      { headerStyle: { backgroundColor: 'pink', },
        headerTitleStyle: { fontWeight: 'bold', color: colors.SECONDARY, },
      }),
  }, 
);
//-------------------------------------------------------------------
class AppNavigator extends Component 
{  render() {  const nav = addNavigationHelpers(
                  {  dispatch: this.props.dispatch,
                     state: this.props.nav,
                 });
               if (!this.props.user.isAuthenticated) {  return <AuthenticationScreen />; }
               return <AppMainNav navigation={nav} />;
            }
}

export default connect(state => ({ nav: state.nav, user: state.user}))(AppNavigator);

export const router = AppMainNav.router;

//---just by connecting we can write dispatch inside render---then take state from here and pass it in dispatch

