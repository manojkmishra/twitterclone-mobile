import React, { Component } from 'react';
import styled from 'styled-components/native';
import FeedCard from '../components/FeedCard/FeedCard';
import { graphql} from 'react-apollo';
import GET_TWEETS_QUERY from '../graphql/queries/getTweets';
import { ActivityIndicator, FlatList } from 'react-native';

const Root = styled.View` flex: 1; paddingTop: 5; backgroundColor: #f2f2f2`;
//const T = styled.Text``;
const List = styled.ScrollView``;
class HomeScreen extends Component 
{ state ={};
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
export default graphql(GET_TWEETS_QUERY)(HomeScreen);
