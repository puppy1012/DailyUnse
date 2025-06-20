import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const InnerMenuBar = () => {
    // 운세 메뉴 항목 정의 (이미지와 라벨)
    const items = [
        { src: "https://img.jeomsin.co.kr/mz_main_menu/srRtoWx0hLYAXMQf.png", label: "신년운세" },
        { src: "https://img.jeomsin.co.kr/mz_main_menu/bhBFo617ZJvcXR5T.png", label: "토정비결" },
        { src: "https://img.jeomsin.co.kr/mz_main_menu/hO1EtjlR3w8UnMKb.png", label: "정통사주" },
        { src: "https://img.jeomsin.co.kr/mz_main_menu/h21bOcmwYeqSE73d.png", label: "오늘의 운세" },
        { src: "https://img.jeomsin.co.kr/mz_main_menu/mPwIMitW4hNG2TLC.png", label: "내일의 운세" },
        { src: "https://img.jeomsin.co.kr/mz_main_menu/mSAoRHyOPZrzVtuC.png", label: "지정일 운세" },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창 열림 여부
    const [fortune, setFortune] = useState(""); // 불러온 운세 텍스트 저장

    const closeModal = () => setIsModalOpen(false); // 모달 닫기 핸들러

    // ✅ 선택한 운세 종류(label)를 기반으로 운세 API 호출
    const fetchFortune = async (label) => {
        const url = "https://mocki.io/v1/ea457ea8-5aa9-49b1-a44a-c0b3cdfffe56"; // 모의 API

        try {
            const res = await fetch(url);
            const data = await res.json();

            const messages = data[label]; // 예: "오늘의 운세": [ "...", "..." ]
            if (Array.isArray(messages)) {
                const randomIndex = Math.floor(Math.random() * messages.length);
                setFortune(messages[randomIndex]); // 랜덤으로 하나 선택
            } else {
                setFortune("운세 정보를 불러올 수 없습니다.");
            }

            setIsModalOpen(true); // 모달 열기
        } catch (err) {
            setFortune("운세 불러오기 실패");
            setIsModalOpen(true);
        }
    }

    const navigate = useNavigate();

    // "점신 시작하기" 버튼 클릭 시 경로 이동
    const goToSignupIntro = () => {
        navigate("/start-jeomsin");
    }

    return (
        <AppWrapper>
            <Card>
                {/* 상단 설명 영역 */}
                <Subtitle>
                    소름 돋는 <Highlight>미래 예측</Highlight>
                </Subtitle>
                <Title>가장 정확한 사주 풀이</Title>

                {/* 운세 아이콘 그리드 영역 */}
                <Grid>
                    {items.map((item, idx) => (
                        <GridItem key={idx}>
                            <ImageWrapper
                                onClick={() => {
                                    if (item.label === "오늘의 운세") {
                                        navigate("/fortune-form"); // ✅ 특정 라벨 클릭 시 이동
                                    } else {
                                        fetchFortune(item.label); // ✅ 나머지는 기존 운세 모달
                                    }
                                }}
                            >
                                <Icon src={item.src} alt={item.label} />
                            </ImageWrapper>
                            <Label>{item.label}</Label>
                        </GridItem>
                    ))}
                </Grid>
            </Card>

            {/* 운세 결과를 보여주는 모달 */}
            {isModalOpen && (
                <ModalBackdrop onClick={closeModal}>
                    <Modal onClick={(e) => e.stopPropagation()}> {/* 클릭 전파 차단 */}
                        <CloseButton onClick={closeModal}>×</CloseButton>
                        <h2>당신의 앞날이 궁금하다면?</h2>
                        <p>지금 사주정보를 입력하고 점신에서 알아봐요!</p>
                        <p>{fortune || "운세를 불러오는 중입니다..."}</p>

                        {/* 버튼 두 개 */}
                        <YellowButton onClick={goToSignupIntro}>점신 시작하기</YellowButton>
                        <GrayButton>기존 회원 로그인하기</GrayButton>
                    </Modal>
                </ModalBackdrop>
            )}
        </AppWrapper>
    );
};

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px 16px; /* ← 좌우 여백 추가 */
    //background-color: #f9f9f9;
`;

const Card = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 32px 24px;
    max-width: 420px;
    width: 100%;
    margin: 40px auto;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    text-align: center;
`;

const Subtitle = styled.p`
    font-size: 15px;
    color: #6b7a99; // 조금 더 진하고 차분한 회색
    margin: 0;
`;

const Highlight = styled.span`
    color: #4b63b6; // 포인트 컬러
    font-weight: 700;
`;

const Title = styled.h1`
    font-size: 22px;
    font-weight: bold;
    margin: 12px 0 28px;
    color: #222;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    cursor: pointer;
`;

const Icon = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, filter 0.2s ease;

    &:hover {
        transform: scale(1.1);
        filter: brightness(1.1);
    }
`;

const Label = styled.span`
    margin-top: 6px;
    font-size: 13px;
`;

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const Modal = styled.div`
    background: white;
    border-radius: 20px;
    padding: 24px;
    width: 90%;
    max-width: 400px;
    text-align: center;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
`;

const YellowButton = styled.button`
    background-color: #ffe600;
    color: #333;
    border: none;
    padding: 14px;
    width: 100%;
    margin-top: 20px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #ffd900;
    }
`;

const GrayButton = styled.button`
    background-color: #f1f1f5;
    color: #333; /* 글자색 더 선명하게 */
    border: none;
    padding: 14px;
    width: 100%;
    margin-top: 12px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #e0e0eb;
    }
`;

export default InnerMenuBar;