import React, { Component } from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
//import { fakeAvatar} from '../utils/constants';
import Loading from './Loading';
import { connect } from 'react-redux';
import { connectActionSheet } from '@expo/react-native-action-sheet';

const AVATAR_SIZE = 30; const AVATAR_RADIUS = AVATAR_SIZE / 2;

const Avatar = styled.Image` height: ${AVATAR_SIZE}; width: ${AVATAR_SIZE}; borderRadius: ${AVATAR_RADIUS};`;

const Button = styled(Touchable).attrs({ feedback: 'opacity', hitSlop: { top: 20, bottom: 20, right: 20, left: 20 },})
`marginRight: 15; justifyContent: center; alignItems: center;`;

class HeaderAvatar extends Component 
{ //state = {}
  _onOpenActionSheet = () => 
  {  const options = ['Logout', 'Cancel'];
     const destructiveButtonIndex = 0;
     this.props.showActionSheetWithOptions({ options,destructiveButtonIndex, },
                                             buttonIndex => { console.log('/src/components/headeravatar.js-buttoninddx=',buttonIndex)  
                                                            },);
  };
   render() { // const info = false;
               //if(!info)
              if (!this.props.info)
               { return ( <Button disabled>
                                   <Loading size="small"/>
                                   </Button>
                               );
                        }
               return ( <Button side="left" onPress={this._onOpenActionSheet}>
                        <Avatar source={{ uri: this.props.info.avatar }} />
                       </Button>
                     );
           }
}
//export default HeaderAvatar;
//export default connect(state => ({ info: state.user.info }))(HeaderAvatar) //----before actionsheet
export default connect(state => ({ info: state.user.info }))(connectActionSheet(HeaderAvatar))
