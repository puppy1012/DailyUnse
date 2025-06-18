import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Wrapper>
      <MainText>(주)DailyUnse</MainText>
      <SubText>대표이사 : 이승현</SubText>
      <SubText>서울 서초구 효령로 335</SubText>
      <SubText>(서초동 1604-19)</SubText>
      <SubText>사업자 등록번호 : 1234-56-78910</SubText>
      <SubText>통신판매업 신고 : 제2310-서울갱냄-12345호</SubText>
      <SubText>대표전화 : <strong>1234-5678</strong></SubText>
      <AdBox>광고 제휴 문의</AdBox>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    
`

const MainText = styled.div`
    color:#1F2024;
    font-size:12px;
    font-weight: 700;
`

const SubText = styled.div`
    color:#818C9A;
    font-size:11px;
    font-weight: 400;
    line-height: 163%;
    text-align: start;   
    
    strong {
        color:#3448FF;
        font-weight: 500;
    }
`
const AdBox = styled.div`
    display: flex;
    width: 100%;
    height: 48.4px;
    border-radius : 7px;
    border: 1px solid #efefef; 
    cursor: pointer;
    color : rgb(102, 154, 255);
    font-size: 12px;
    font-weight: 700;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 8px;
    transition: all 0.3s ease-in;

    &:hover {
        background-color: rgb(102, 154, 255);
        color:#fff;
    }
    

`