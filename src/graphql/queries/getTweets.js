import { gql } from 'react-apollo';

export default gql`
{
  getTweets {  text favoriteCount _id createdAt
    user {
      username
      avatar
      lastName
      firstName
    }
  }
}
`;
