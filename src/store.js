import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

//const networkInterface = createNetworkInterface({  uri: 'http://localhost:3000/graphiql',});
const networkInterface = createNetworkInterface({  uri: 'http://192.168.0.2:3000/graphql',});

export const client = new ApolloClient({  networkInterface,});

//const middlewares = [client.middleware(), thunk];
const middlewares = [client.middleware(), thunk, createLogger()];

export const store = createStore( reducers(client), undefined, composeWithDevTools(applyMiddleware(...middlewares)),);
