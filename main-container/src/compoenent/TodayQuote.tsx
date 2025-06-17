import React, { useState } from "react";
import styled from "styled-components";
import quotes from "../../public/assets/todayQuote/quotes.json"; // 또는 직접 배열로 선언해도 OK


const TodayQuote = () => {
    const [quote, setQuote] = useState("");

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <Wrapper>
            {/* 상단 타이틀 + 버튼 */}
            <TopRow>
                <Title>오늘의 한마디</Title>
                <QuoteButton onClick={handleClick}>확인하기 💬</QuoteButton>
            </TopRow>

            {/* 인용 문구 박스 */}
            <QuoteBox>
                {quote ? quote : "오늘의 문구가 여기에 표시됩니다 📝"}
            </QuoteBox>
        </Wrapper>
    );
};

const QuoteBox = styled.div`
    margin-top: 20px;
    padding: 16px;
    border: 1.5px solid #ffe066;
    border-radius: 12px;
    background-color: #fff9db;  // 💛 따뜻한 노랑
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 8px 16px;
  font-size: 1rem;
  background-color: #f8d57e;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 32px 16px;
  box-sizing: border-box;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;  // 왼쪽 타이틀, 오른쪽 버튼
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

const QuoteButton = styled.button`
  padding: 6px 14px;
  font-size: 0.95rem;
  background-color: #f8d57e;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f1c94b;
  }
`;
export default TodayQuote;
