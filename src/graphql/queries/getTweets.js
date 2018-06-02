import { gql } from 'react-apollo';

export default gql`
{
  getTweets {  text favoriteCount _id
    user {   username email  }
  }
}
`;
