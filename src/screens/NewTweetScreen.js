import React, { Component } from 'react';
import styled from 'styled-components/native';
import { colors } from '../utils/constants';
import { Platform, Keyboard } from 'react-native';
import Touchable from '@appandflow/touchable';

const Root = styled.View` backgroundColor: ${props => props.theme.WHITE}; flex: 1; alignItems: center;`;
const Wrapper = styled.View` height: 80%; width: 90%; paddingTop: 5;   position: relative; `;
const Input = styled.TextInput.attrs({ multiline: true, placeholder: "Write Your Tweet", maxLength: 140,
              selectionColor: Platform.OS === 'ios' && colors.PRIMARY, autoFocus: true,})`  
              height: 40%;  width: 100%;  fontSize: 18;  color: ${props => props.theme.SECONDARY};`;
//const T = styled.Text``
//autofocus in const Input---for keyboard to appear as we come to new tweet page
const TweetButton = styled(Touchable).attrs({ feedback: 'opacity', hitSlop: { top: 20, left: 20, right: 20, bottom: 20 },})`
                    backgroundColor: ${props => props.theme.PRIMARY}; justifyContent: center; alignItems: center; width: 80; height: 40;
                    borderRadius: 20; position: absolute; top: 60%; right: 0;`;
//--position: absolute; top: 60%; right: 0---will keep the button on right --down of 60% place
const TweetButtonText = styled.Text` color: ${props => props.theme.WHITE}; fontSize: 16;`;

class NewTweetScreen extends Component
{ state = { text: '', };
  _onChangeText = text => this.setState({ text });
  render() 
  {  return ( <Root>
               <Wrapper>
                 <Input value={this.state.text} onChangeText={this._onChangeText} />
                 <TweetButton>
                    <TweetButtonText>Tweet</TweetButtonText>
                 </TweetButton>
               </Wrapper>
              </Root>
            );
  }
}
export default NewTweetScreen;