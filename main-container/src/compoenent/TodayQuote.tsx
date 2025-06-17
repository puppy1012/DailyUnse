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
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Button onClick={handleClick}>오늘의 한마디 💬</Button>
            {quote && <QuoteBox>{quote}</QuoteBox>}
        </div>
    );
};

const QuoteBox = styled.div`
  margin-top: 24px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
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
export default TodayQuote;
