import React from "react";
import LoginPage from "./component/LoginPage";
import styled from "styled-components";


export default function App() {
  return (
    <Wrapper>
      <LoginText>SNS 연동하기</LoginText>
      <SubText>연동하지 않으면, 사주정보가 저장되지 않아요🥲
<br/>단 한 번의 연동으로 더 편리하게 사용하세요!</SubText>
      <LoginPage />
    </Wrapper>
  )
}


const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  width: calc(480px - 48px);
  height: auto;
  margin-bottom: 20px;
  align-items: center;
`
const LoginText = styled.span`
  display: flex;
  color: #1F2024;
  font-size: 22px;
  font-weight: 700;  
  font-family: 'Pretendard', sans-serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 21.5px 30px;
`

const SubText = styled.span`
  display: flex;
  flex-direction: column;
  color: #1F2024;
  text-align: center;
  font-size: 15px;
  font-weight: 500;  
  font-family: 'Pretendard', sans-serif;
  padding: 0px 24px 30px;

  
`
