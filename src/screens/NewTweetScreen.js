import React, { Component } from 'react';
import styled from 'styled-components/native';
import { colors } from '../utils/constants';
import { Platform, Keyboard } from 'react-native';

const Root = styled.View` backgroundColor: ${props => props.theme.WHITE}; flex: 1; alignItems: center;`;
const Wrapper = styled.View` height: 80%; width: 90%; paddingTop: 5; backgroundColor: pink; `;
const Input = styled.TextInput.attrs({ multiline: true, placeholder: "Write Your Tweet", maxLength: 140,
              selectionColor: Platform.OS === 'ios' && colors.PRIMARY, autoFocus: true,})`  
              height: 40%;  width: 100%;  fontSize: 18;  color: ${props => props.theme.SECONDARY};`;
const T = styled.Text``
//autofocus in const Input---for keyboard to appear as we come to new tweet page

class NewTweetScreen extends Component {
  state = {  }
  render() {
    return (
      <Root>
        <Wrapper>
        <Input/>
        </Wrapper>
      </Root>
    );
  }
}

export default NewTweetScreen;