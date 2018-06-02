import React, { Component } from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';
import { colors } from '../utils/constants';

const Root = styled.View ` flex: 1; position: relative;`;

const BackButton = styled(Touchable).attrs({  feedback: 'opacity',  hitSlop: { top: 20, bottom: 20, right: 20, left: 20 },
})` justifyContent: center; alignItems: center; position: absolute; top: 5%; zIndex: 1; left: 5%;`;


const T = styled.Text``

class SignupForm extends Component
{ state = {  }
  render() 
  {  return (  <Root>
                 <BackButton  onPress={this.props.onBackPress}>
                    <MaterialIcons color={colors.WHITE} size={30} name="arrow-back" />
                 </BackButton>
                   <T>SignupForm</T>
               </Root>
           );
  }
}
export default SignupForm;