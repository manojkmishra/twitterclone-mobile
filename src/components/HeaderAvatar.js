import React, { Component } from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { fakeAvatar} from '../utils/constants';

const AVATAR_SIZE = 30; const AVATAR_RADIUS = AVATAR_SIZE / 2;

const Avatar = styled.Image` height: ${AVATAR_SIZE}; width: ${AVATAR_SIZE}; borderRadius: ${AVATAR_RADIUS};`;

const Button = styled(Touchable).attrs({ feedback: 'opacity', hitSlop: { top: 20, bottom: 20, right: 20, left: 20 },})
`marginRight: 15; justifyContent: center; alignItems: center;`;

class HeaderAvatar extends Component 
{ state = {}
   render() {  return ( <Button>
                        <Avatar source={{ uri: fakeAvatar }} />
                       </Button>
                     );
           }
}
export default HeaderAvatar;
