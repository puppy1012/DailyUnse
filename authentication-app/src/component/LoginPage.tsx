import React from 'react'
import SocialLoginButton from './SocialLoginButton'
import { useOAuth } from '../hooks/useOAuth';
import styled from 'styled-components';

export default function LoginPage() {
    const { login } = useOAuth();

  return (
    <Wrapper>
      <SocialLoginButton provider="google" onClick={() => login("google")} />
      <SocialLoginButton provider="kakao" onClick={() => login("kakao")} />    
    </Wrapper>
  )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
`