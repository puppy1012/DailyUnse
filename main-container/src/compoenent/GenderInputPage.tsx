import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const GenderInputPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state?.name || ""; // STEP 1에서 넘겨준 이름

    const [gender, setGender] = useState("");

    const handleSubmit = () => {
        if (gender) {
            navigate("/step3", { state: { name, gender } });
        }
    };

    return (
        <PageWrapper>
            <StepText>STEP 2 / 4</StepText>
            <Title>
                <strong>{name}</strong>님의 <br />
                성별을 알려주세요.
            </Title>

            <LabelRow>
                <SubLabel>성별</SubLabel>
                <HintText>대운의 시기는 성별에 따라 달라요!</HintText>
            </LabelRow>

            <GenderBoxWrapper expanded={!!gender}>
                <GenderBox selected={gender === "male"} onClick={() => setGender("male")}>
                    남자
                </GenderBox>
                <GenderBox selected={gender === "female"} onClick={() => setGender("female")}>
                    여자
                </GenderBox>
            </GenderBoxWrapper>

            {/* 아래가 조건부로 자연스럽게 펼쳐짐 */}
            {gender && (
                <AdditionalInfoWrapper>
                    <InfoLabel>이름</InfoLabel>
                    <InputText>{name}</InputText>
                    <SubLabel>한글 최대 6자</SubLabel>
                    <ConfirmButton onClick={handleSubmit} disabled={!gender}>
                        확인
                    </ConfirmButton>
                </AdditionalInfoWrapper>
            )}
        </PageWrapper>
    );
};

export default GenderInputPage;

const PageWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 24px 100px; //하단 버튼 영역만큼 여유 공간
    min-height: 100vh;
    box-sizing: border-box;
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
  line-height: 1.5;
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const SubLabel = styled.span`
    font-size: 14px;
    color: #888;
    margin-top: 4px;
`;

const HintText = styled.span`
  font-size: 12px;
  color: #ccc;
`;

const GenderBoxWrapper = styled.div<{ expanded: boolean }>`
    display: flex;
    gap: 12px;
    margin-bottom: ${({ expanded }) => (expanded ? "24px" : "100px")};
`;

const GenderBox = styled.div<{ selected: boolean }>`
  flex: 1;
  background-color: ${({ selected }) => (selected ? "#5865f2" : "#f3f3f3")};
  color: ${({ selected }) => (selected ? "white" : "#333")};
  text-align: center;
  padding: 16px 0;
  border-radius: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const InfoLabel = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: 16px;
`;

const InputText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const ConfirmButton = styled.button`
  margin-top: auto;
  width: 100%;
  background-color: #5865f2;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 16px 0;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: slideUp 0.4s ease forwards;

  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;