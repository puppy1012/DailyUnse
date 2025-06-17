import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const BirthInputPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name, gender } = location.state || {};

    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [solar, setSolar] = useState(null); // null = 선택 안 됨

    const handleSubmit = () => {
        if (!year || !month || !day || solar === null) {
            alert("생년월일과 양력/음력을 모두 선택해주세요.");
            return;
        }
        const birth = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
        navigate("/step4", { state: { name, gender, birth, solar } });
    };

    return (
        <PageWrapper>
            <StepText>STEP 3 / 4</StepText>
            <Title>언제 태어나셨나요?</Title>

            <InputRow>
                <Select value={year} onChange={(e) => setYear(e.target.value)}>
                    <option value="">년</option>
                    {Array.from({ length: 100 }, (_, i) => {
                        const y = new Date().getFullYear() - i;
                        return <option key={y}>{y}</option>;
                    })}
                </Select>
                <Select value={month} onChange={(e) => setMonth(e.target.value)}>
                    <option value="">월</option>
                    {[...Array(12)].map((_, i) => (
                        <option key={i + 1}>{i + 1}</option>
                    ))}
                </Select>
                <Select value={day} onChange={(e) => setDay(e.target.value)}>
                    <option value="">일</option>
                    {[...Array(31)].map((_, i) => (
                        <option key={i + 1}>{i + 1}</option>
                    ))}
                </Select>
            </InputRow>

            <LabelRow>
                <SubLabel>양력 / 음력</SubLabel>
            </LabelRow>
            <ToggleWrapper>
                <ToggleButton selected={solar === true} onClick={() => setSolar(true)}>
                    양력
                </ToggleButton>
                <ToggleButton selected={solar === false} onClick={() => setSolar(false)}>
                    음력
                </ToggleButton>
            </ToggleWrapper>

            <Summary>
                <InfoItem>
                    <label>이름</label>
                    <div>{name}</div>
                </InfoItem>
                <InfoItem>
                    <label>성별</label>
                    <div>{gender === "male" ? "남자" : "여자"}</div>
                </InfoItem>
            </Summary>

            <ConfirmButton onClick={handleSubmit}>확인</ConfirmButton>
        </PageWrapper>
    );
};

export default BirthInputPage;

// Styled Components
const PageWrapper = styled.div`
    padding: 40px 24px 100px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const StepText = styled.h2`
    font-size: 14px;
    color: #5865f2;
    margin-bottom: 8px;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 24px;
`;

const InputRow = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
`;

const Select = styled.select`
    flex: 1;
    padding: 12px 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
    appearance: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const LabelRow = styled.div`
    margin-top: 12px;
    margin-bottom: 8px;
`;

const SubLabel = styled.div`
    font-size: 14px;
    color: #888;
`;

const ToggleWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
`;

const ToggleButton = styled.button<{ selected?: boolean }>`
    flex: 1;
    background-color: ${({ selected }) => (selected ? "#5865f2" : "#f3f3f3")};
    color: ${({ selected }) => (selected ? "white" : "#333")};
    font-size: 14px;
    font-weight: bold;
    padding: 12px 0;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    opacity: ${({ selected }) => (selected === undefined ? 0.6 : 1)};
    transition: 0.2s ease all;
`;

const Summary = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 24px 0 16px;
    padding: 16px;
    background-color: #f9f9f9;
    border-radius: 8px;
`;

const InfoItem = styled.div`
    text-align: left;

    label {
        font-size: 12px;
        color: #999;
        margin-bottom: 4px;
        display: block;
    }

    div {
        font-weight: 600;
        font-size: 16px;
    }
`;

const ConfirmButton = styled.button`
    width: 100%;
    background-color: #5865f2;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 14px 0;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 12px;
`;
