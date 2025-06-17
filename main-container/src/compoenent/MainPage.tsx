import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components';
import NavBar from './NavBar';
import FortuneSwiper from "./FortuneSwiper";
import TodayQuote from "./TodayQuote";
import InnerMenuBar from "./InnerMenuBar";

export default function MainPage() {
  return (
    <AppLayout>
      <MainWrapper>
        <MainContainer>
          <Header />
          {/* 다른 컴포넌트 이 아래에 추가 */}
            <FortuneSwiper/>
            <TodayQuote/>
            <InnerMenuBar/>
          {/* 위까지 추가가  */}
          <Footer />
        </MainContainer>
        <NavBar />
      </MainWrapper>
    </AppLayout>
  )
}



const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  font-family: 'Pretendard', sans-serif;
`;

const MainContainer = styled.div`
  flex: 1; /* 나머지 영역 다 차지하게 */
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.div`
  width: 480px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

