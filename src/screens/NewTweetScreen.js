import React, { Component } from 'react';
import styled from 'styled-components/native';

const Root = styled.View` backgroundColor: ${props => props.theme.WHITE}; flex: 1; alignItems: center;`;
const Wrapper = styled.View` height: 80%; width: 90%; paddingTop: 5; backgroundColor: red; `;
const T = styled.Text``

class NewTweetScreen extends Component {
  state = {  }
  render() {
    return (
      <Root>
        <Wrapper>
        <T>NewTweetScreen</T>
        </Wrapper>
      </Root>
    );
  }
}

export default NewTweetScreen;