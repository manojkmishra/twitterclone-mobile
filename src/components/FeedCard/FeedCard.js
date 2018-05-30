import React from 'react';
import styled from 'styled-components/native';
import FeedCardHeader from './FeedCardHeader';

const Root = styled.View`
  minHeight: 180;
  backgroundColor: red;
  width: 100%;
  shadowColor: ${props => props.theme.SECONDARY};
  shadowOffset: 0px 2px;
  shadowRadius: 2;
  shadowOpacity: 0.1;
`;

function FeedCard()
{   return (<Root>
             <FeedCardHeader/>
             </Root>
            );
    
}
export default FeedCard;