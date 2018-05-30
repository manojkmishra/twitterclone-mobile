import React, { Component } from 'react';
import styled from 'styled-components/native';

const Root = styled.View``;
const T = styled.Text``;

class HomeScreen extends Component 
{ state ={}
  render() 
    {  return (
                <Root>
                <T>HomeScreen</T>
                </Root>
             );
    }
}
    
export default HomeScreen;
