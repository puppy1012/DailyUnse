import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MenuSearch from "./MenuSearch";
import CounselorSearch from "./CounselorSearch";

export default function SearchPage() {
    const navigate = useNavigate();
    const [tab, setTab] = useState<"menu" | "counselor">("menu");

    return (
        <Wrapper>
            <Header>
                <BackBtn onClick={() => navigate(-1)}>←</BackBtn>
                <Title>검색</Title>
            </Header>

            <TabWrapper>
                <Tab selected={tab === "menu"} onClick={() => setTab("menu")}>메뉴 검색</Tab>
                <Tab selected={tab === "counselor"} onClick={() => setTab("counselor")}>상담사 검색</Tab>
            </TabWrapper>

            {tab === "menu" ? <MenuSearch /> : <CounselorSearch />}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 16px;
    font-family: 'Pretendard', sans-serif;
    height:100vh;//강사님픽
    max-height:1200px;
    overflow: hidden;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
`;

const BackBtn = styled.button`
    font-size: 18px;
    background: none;
    border: none;
    cursor: pointer;
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
`;

const TabWrapper = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 12px;
    border-bottom: 1px solid #eee;
`;

const Tab = styled.div<{ selected?: boolean }>`
    font-size: 14px;
    font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
    color: ${({ selected }) => (selected ? "black" : "#aaa")};
    padding-bottom: 8px;
    border-bottom: ${({ selected }) => (selected ? "2px solid black" : "none")};
    cursor: pointer;
`;
