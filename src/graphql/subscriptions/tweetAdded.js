import { gql } from 'react-apollo';



export default gql`
  subscription 
  {  tweetAdded {  text favoriteCount _id createdAt
                  user { username avatar lastName firstName }
               }
  }
`;
