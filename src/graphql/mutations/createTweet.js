import { gql } from 'react-apollo';

import FeedCard from '../../components/FeedCard/FeedCard';

export default gql`
  mutation createTweet($text: String!) 
  { createTweet(text: $text) 
         {   favoriteCount _id createdAt text user {avatar username firstName lastName}
        }  
  }
`;
