import React from 'react';
import { UIManager, AsyncStorage } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import { store, client } from './src/store';
import { colors } from './src/utils/constants';
import { login } from './src/actions/user';
import { AppLoading } from 'expo';

//import Welcome from './src/components/Welcome';
//import HomeScreen from './src/screens/HomeScreen';
import AppNavigation from './src/navigations';

if (UIManager.setLayoutAnimationEnabledExperimental) { UIManager.setLayoutAnimationEnabledExperimental(true);}

export default class App extends React.Component 
{ //state = { appIsReady: false, };
  componentWillMount() {   this._checkIfToken();  }
  _checkIfToken = async () => 
  { try { const token = await AsyncStorage.getItem('@twitteryoutubeclone');
          if (token != null) {  store.dispatch(login());  }
        } catch (error) {  throw error; }
   // this.setState({ appIsReady: true });
  };
  render() 
  { //if (!this.state.appIsReady) { return <AppLoading />; } 
    return ( <ApolloProvider store={store} client={client}>
                <ThemeProvider theme={colors}>
                  < AppNavigation store={store} />
                </ThemeProvider>
              </ApolloProvider>
    );
  }
}
