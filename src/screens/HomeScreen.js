import React, { Component } from 'react';
import styled from 'styled-components/native';
import FeedCard from '../components/FeedCard/FeedCard';
import { graphql, compose, withApollo} from 'react-apollo';
import GET_TWEETS_QUERY from '../graphql/queries/getTweets';
import { ActivityIndicator, FlatList } from 'react-native';
import ME_QUERY from '../graphql/queries/me';
import { connect } from 'react-redux';
import { getUserInfo } from '../actions/user';
import TWEET_ADDED_SUBSCRIPTION from '../graphql/subscriptions/tweetAdded';

const Root = styled.View` flex: 1; paddingTop: 5; backgroundColor: #f2f2f2`;
//const T = styled.Text``;
const List = styled.ScrollView``;
class HomeScreen extends Component 
{ state ={};
  componentWillMount() 
   { this.props.data.subscribeToMore(
      {   document: TWEET_ADDED_SUBSCRIPTION,
                  updateQuery: (prev, { subscriptionData }) => 
                  {  if (!subscriptionData.data) { return prev;  }
                    const newTweet = subscriptionData.data.tweetAdded;
                    if (!prev.getTweets.find(t => t._id === newTweet._id)) 
                    { return {   ...prev,
                                getTweets: [{ ...newTweet }, ...prev.getTweets],
                              };
                    }
                   return prev;
                  },
      });
    }
  componentDidMount() {  this._getUserInfo(); }
  _getUserInfo = async () => 
  { const { data: { me } } = await this.props.client.query({ query: ME_QUERY }); //client props available because at last line connect with actions
    this.props.getUserInfo(me);
  };
  _renderItem = ({ item }) => <FeedCard {...item} />;
  render() 
    {
       console.log('state=', this.state);
       console.log('props=', this.props); //getTweets present in the data part of this 
       const { data } = this.props;
       if (data.loading) 
          {  return (  <Root> 
                          <ActivityIndicator size="large"/> 
                       </Root>
                     );
          } 
       return (
                <Root>
                  <FlatList contentContainerStyle={{ alignSelf: 'stretch' }}
                    data={data.getTweets}
                    keyExtractor={item => item._id}
                    renderItem={this._renderItem}
                   />
                </Root>
             );
    }
}
    
//export default HomeScreen;
//export default graphql(GET_TWEETS_QUERY)(HomeScreen);
export default withApollo( compose(connect(undefined, { getUserInfo }), graphql(GET_TWEETS_QUERY))(  HomeScreen, ),);
