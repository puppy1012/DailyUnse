import React from 'react'
import styled from 'styled-components';
// import ISearch from '../assets/Isearch.png';
// import IMyPage from '../assets/Imypage.png';
import WeatherWidget from 'weatherForecastApp/App';




export default function Header() {
  return (
    <HeaderWrapper>
      <WeatherWidget />
      <RightWrapper>
        <SearchBtn>
            <img src="/assets/Isearch.png" alt="Search" width={34} height={34} />
        </SearchBtn>
        <MyPageBtn>
            <img src="/assets/Imypage.png" alt="mypages" width={12}/>
        </MyPageBtn>
      </RightWrapper>
    </HeaderWrapper>
  );
}


const HeaderWrapper = styled.div`
  position: fixed;
  top:0;
  width: calc(100% - 48px);
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightWrapper = styled.div`
    /* position: fixed; */
    display: flex;
    margin-left: auto;
    margin-right: 0;
    align-items: center;
    
`

const SearchBtn = styled.button`
    cursor: pointer;
    background: none;
    outline: none;
    border:none;

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