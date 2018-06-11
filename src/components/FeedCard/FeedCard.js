import React from 'react';
import styled from 'styled-components/native';
import FeedCardHeader from './FeedCardHeader';
import FeedCardBottom from './FeedCardBottom';
import { graphql } from 'react-apollo';
import FAVORITE_TWEET_MUTATION from '../../graphql/mutations/favoriteTweet';

const Root = styled.View ` minHeight: 180; backgroundColor: ${props => props.theme.WHITE}; width: 100%;  padding: 7px;
                           shadowColor: ${props => props.theme.SECONDARY}; shadowOffset: 0px 2px;marginVertical: 5;
                           shadowRadius: 2; shadowOpacity: 0.1;
                         `;
const CardContentContainer = styled.View `flex: 1;  padding: 10px 20px 10px 0px;`;
const CardContentText = styled.Text `fontSize: 14;   textAlign: left; fontWeight: 500; color: ${props => props.theme.SECONDARY};`;
//const text = 'text in CardContentText' ;

function FeedCard({text, user, createdAt, favoriteCount, favorite })
{   return (<Root>
             <FeedCardHeader {...user} createdAt={createdAt} />
             < CardContentContainer >
                <CardContentText> {text}</CardContentText>
             </CardContentContainer>
             < FeedCardBottom favoriteCount={favoriteCount} onFavoritePress={favorite}/>
             </Root>
            );
    
}
//export default FeedCard;

export default graphql(FAVORITE_TWEET_MUTATION, 
  {  props: ({ ownProps, mutate }) => (
    { favorite: () => mutate({  variables: { _id: ownProps._id },  //this action will be called up
                                optimisticResponse: 
                                {  __typename: 'Mutation',  
                                   favoriteTweet: { __typename: 'Tweet', _id: ownProps._id,  
                                                    favoriteCount: ownProps.isFavorited ? ownProps.favoriteCount - 1 : ownProps.favoriteCount + 1,
                                                    isFavorited: !ownProps.isFavorited,
                                                  },
                                },
                            }),
    }),
})(FeedCard);