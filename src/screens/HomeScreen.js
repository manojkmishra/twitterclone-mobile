import React, { Component } from 'react';
import styled from 'styled-components/native';
import FeedCard from '../components/FeedCard/FeedCard';
import { graphql} from 'react-apollo';
import GET_TWEETS_QUERY from '../graphql/queries/getTweets';

const Root = styled.View` flex: 1; paddingTop: 5; backgroundColor: #f2f2f2`;
//const T = styled.Text``;
const List = styled.ScrollView``;
class HomeScreen extends Component 
{ state ={};
  
  render() 
    {
       console.log('state=', this.state);
       console.log('props=', this.props);
       return (
                <Root>
                  <List>
                   <FeedCard/>
                    < FeedCard />
                     < FeedCard />
                   </List>
                </Root>
             );
    }
}
    
//export default HomeScreen;
export default graphql(GET_TWEETS_QUERY)(HomeScreen);
