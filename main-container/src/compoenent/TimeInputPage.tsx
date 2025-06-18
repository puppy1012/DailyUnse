import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const TimeInputPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { name, gender, birth, solar } = location.state || {};
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [showSNSModal, setShowSNSModal] = useState(false);

    const [birthTime, setBirthTime] = useState("");
    const [unknownTime, setUnknownTime] = useState(false);
    const timeInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        if (!birthTime && !unknownTime) {
            alert("태어난 시간을 입력하거나 '시간 모름'을 선택해주세요.");
            return;
        }

        setShowTermsModal(true);
    };

    const handleFinalSubmit = () => {
        const resultData = {
            name,
            gender,
            birth,
            solar,
            birthTime: unknownTime ? null : birthTime,
        };
        navigate("/", { state: resultData }); // ✅ 여기서만 이동!
    };

    return (
        <PageWrapper>
            <StepText>STEP 4 / 4</StepText>
            <Title>{name || "당신"}님의 사주정보를 알려주세요.</Title>

            <LabelRow>
                <SubLabel>태어난 시간</SubLabel>
                <HintText>
                    <TimeBox onClick={() => !unknownTime && timeInputRef.current?.click()} disabled={unknownTime}>
                        <span>{birthTime ? birthTime : "시간을 선택해주세요"}</span>
                        <ClockIcon>🕑</ClockIcon>
                        <HiddenTimeInput
                            ref={timeInputRef}
                            type="time"
                            value={birthTime}
                            onChange={(e) => setBirthTime(e.target.value)}
                            disabled={unknownTime}
                        />
                    </TimeBox>
                    <TimeUnknownLabel>
                        <input
                            type="checkbox"
                            checked={unknownTime}
                            onChange={(e) => {
                                setUnknownTime(e.target.checked);
                                if (e.target.checked) setBirthTime("");
                            }}
                        />
                        시간 모름
                    </TimeUnknownLabel>
                </HintText>
            </LabelRow>

            <Divider />

            <SummaryBox>
                <SummaryRow>
                    <label>생년월일</label>
                    <div>{birth}</div>
                </SummaryRow>
                <SummaryRow>
                    <label>양력 / 음력</label>
                    <div>{solar ? "양력" : "음력"}</div>
                </SummaryRow>
                <SummaryRow>
                    <label>성별</label>
                    <div>{gender === "male" ? "남자" : "여자"}</div>
                </SummaryRow>
                <SummaryRow>
                    <label>이름</label>
                    <div>{name}</div>
                </SummaryRow>
            </SummaryBox>

            <ConfirmButton onClick={handleSubmit}>입력완료</ConfirmButton>

            {showTermsModal && (
                <ModalBackdrop>
                    <ModalCard>
                        <h3>이용약관 동의</h3>
                        <p>아래 시작하기를 누르면 점신의 서비스 이용약관 및 개인정보 처리방침에 동의하는 것으로 간주합니다.</p>
                        <YellowButton onClick={() => {
                            setShowTermsModal(false);
                            setShowSNSModal(true);
                        }}>시작하기</YellowButton>
                        <CloseButton onClick={() => setShowTermsModal(false)}>×</CloseButton>
                    </ModalCard>
                </ModalBackdrop>
            )}

            {showSNSModal && (
                <ModalBackdrop>
                    <ModalCard>
                        <h3>SNS 연동하기</h3>
                        <p>연동하지 않으면, 사주정보가 저장되지 않아요 😢</p>
                        <SNSButtonRow>
                            <SNSIcon src="/naver.png" alt="Naver" />
                            <SNSIcon src="/kakao.png" alt="Kakao" />
                            <SNSIcon src="/google.png" alt="Google" />
                            <SNSIcon src="/apple.png" alt="Apple" />
                        </SNSButtonRow>
                        <p style={{ fontSize: "13px", color: "#888" }}>
                            단 한 번의 연동으로 더 편리하게 사용하세요!
                        </p>
                        <ModalConfirmButton onClick={handleFinalSubmit}>연동하지 않고 계속하기</ModalConfirmButton>
                        <CloseButton onClick={() => setShowSNSModal(false)}>×</CloseButton>
                    </ModalCard>
                </ModalBackdrop>
            )}
        </PageWrapper>
    );
};

export default TimeInputPage;

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
    line-height: 1.5;
`;

const LabelRow = styled.div`
    margin-bottom: 16px;
`;

const SubLabel = styled.div`
    font-size: 14px;
    color: #888;
    margin-bottom: 8px;
`;

const HintText = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const TimeBox = styled.div<{ disabled: boolean }>`
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    background-color: white;
    color: ${({ disabled }) => (disabled ? "#aaa" : "#333")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    position: relative;
    height: 40px; /* 낮은 높이 */
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-width: 160px;
`;

const HiddenTimeInput = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 2;
`;

const TimeUnknownLabel = styled.label`
    font-size: 14px;
    color: #666;
    display: flex;
    align-items: center;
    gap: 4px;
`;

const Divider = styled.hr`
    border: none;
    border-top: 1px solid #eee;
    margin: 24px 0;
`;

const SummaryBox = styled.div`
    background-color: #f3f3f3;
    border-radius: 12px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const SummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
        font-size: 14px;
        color: #888;
    }

    div {
        font-size: 16px;
        font-weight: bold;
        color: #222;
    }
`;

const ConfirmButton = styled.button`
    margin-top: 32px;
    width: 100%;
    background-color: #5865f2;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 16px 0;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;

const ClockIcon = styled.span`
  margin-left: auto;
  font-size: 16px;
  color: #aaa;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

const ModalCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  background-color: white;
  border-radius: 24px 24px 0 0;
  padding: 24px;
  text-align: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const YellowButton = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #fff200;
  color: #000;
  font-weight: bold;
  font-size: 16px;
  padding: 14px 0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

const SNSButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 20px 0;
`;

const SNSIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.1s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalConfirmButton = styled(ConfirmButton)`
    background-color: #ddd;
    color: #333;
    border-radius: 12px;

    &:hover {
        background-color: #bbb;
    }
`;