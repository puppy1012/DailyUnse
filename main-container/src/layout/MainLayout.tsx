import React from "react";
import styled from "styled-components";
import NavBar from "../compoenent/NavBar";
import Header from "../compoenent/Header";
import Footer from "../compoenent/Footer";
import { useLocation } from "react-router-dom";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppLayout>
            <MainWrapper>
                <MainContainer>
                    <Header />
                    {children}
                    {/* 🔥 /fullpage에서는 Footer 숨기기 */}
                    {location.pathname !== "/fullpage" && <Footer />}
                </MainContainer>
                <NavBar />
            </MainWrapper>
        </AppLayout>
    );
};

export default MainLayout;

// 기존 스타일 그대로 유지
const AppLayout = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  font-family: 'Pretendard', sans-serif;
`;

const MainWrapper = styled.div`
  width: 480px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  flex: 1;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
