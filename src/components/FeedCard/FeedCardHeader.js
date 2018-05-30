import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View ` height: 50; flexDirection: row; alignItems: center; backgroundColor: blue;`;
const AvatarContainer = styled.View `flex: 0.2; backgroundColor: red; alignSelf: stretch;`;
const MetaContainer = styled.View ` flex: 1; alignSelf: stretch;`;

function FeedCardHeader() 
{ return (
          <Root>
            <AvatarContainer/>
            < MetaContainer />
          </Root>
        );
}

export default FeedCardHeader;
