import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import WeatherWidget from 'weatherForecastApp/App';


export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const hideNavRoutes = ["/search"]; // 숨기고 싶은 경로들

  if (hideNavRoutes.includes(location.pathname)) {
      return null;
  }

  return (
    <HeaderWrapper>
      <WeatherWidget />
      <RightWrapper>
        <SearchBtn onClick={() => navigate("/search")}>
            <img src="/assets/Isearch.png" alt="Search" width={34} height={34} />
        </SearchBtn>
        <MyPageBtn onClick={() => navigate('/authentication')}>
            <img src="/assets/Imypage.png" alt="mypages" width={12}/>
        </MyPageBtn>
      </RightWrapper>
    </HeaderWrapper>
  );
}


const HeaderWrapper = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightWrapper = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 0;
    align-items: center;
    
`

const SearchBtn = styled.button`
    background: none;
    outline: none;
    border:none;
    cursor: pointer;

`
const MyPageBtn = styled.button`
    display: flex;
    background-color: #1F2024;
    border-radius: 50%;
    width:28px;
    height: 28px;
    margin: 5px;
    align-items: center;
    justify-content: center;

    
`