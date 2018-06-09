import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import { AsyncStorage } from 'react-native';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
//const networkInterface = createNetworkInterface({  uri: 'http://10.133.44.151:3000/graphql',});
const networkInterface = createNetworkInterface({  uri: 'http://192.168.0.5:3000/graphql',});

const wsClient = new SubscriptionClient('ws://192.168.0.5:3000/subscriptions', { reconnect: true, connectionParams: {}  })
//-------it will reach /resolvers/index.js---then tweet-resovlers--then--schema.js

networkInterface.use(
[{  async applyMiddleware(req, next) 
    { if (!req.options.headers) {      req.options.headers = {};    }
      try {  const token = await AsyncStorage.getItem('@twitteryoutubeclone');
             if (token != null) 
             {  req.options.headers.authorization = `Bearer ${token}` || null;  }
          } catch (error) { throw error; }
      return next();
    }
}])

const networkInterfaceWithSubs = addGraphQLSubscriptions( networkInterface, wsClient  )
export const client = new ApolloClient({  networkInterface: networkInterfaceWithSubs });

export const client = new ApolloClient({  networkInterface,});

//const middlewares = [client.middleware(), thunk];
const middlewares = [client.middleware(), thunk,];
// createLogger()];  

export const store = createStore( reducers(client), undefined, composeWithDevTools(applyMiddleware(...middlewares)),);
