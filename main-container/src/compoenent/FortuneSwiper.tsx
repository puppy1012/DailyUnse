import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import refreshIcon from "../../public/assets/ic_user_change.png";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
//이미지 import
import fortune1 from "../../public/assets/fortuneSwiper/fortuneSwiper1.png";
import fortune2 from "../../public/assets/fortuneSwiper/fortuneSwiper2.png";
import fortune3 from "../../public/assets/fortuneSwiper/fortuneSwiper3.png";
// 값을 잃어버리지않을거면 recoil 또는 localStorage을 사용해라
interface Props {
    name?: string;
}
export const FortuneSwiper = ({ name }: Props) => {
    const swiperRef = useRef<any>(null);
    const navigate = useNavigate(); // ✅ 추가
    return (
        <>
            <HeaderWrapper>
                <HeaderInner>
                    <LeftText>운세</LeftText>
                    <RightSection>
                        <GrayText>선택</GrayText>
                        <BoldText>{name ? `${name}님` : "게스트님"}</BoldText>
                        <img src={refreshIcon} alt="refresh" style={{ width: 18, height: 18, cursor: "pointer" }} />
                    </RightSection>
                </HeaderInner>
            </HeaderWrapper>
            <div style={{ width: "400px", margin: "0 auto" }}>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {fortunes.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <Card onClick={() => navigate('/about')}>
                            <CardImage src={item.img} />
                            {/*<CardText>{item.text}</CardText>*/}
                        </Card>
                        {/*<Card onClick={() => navigate('/about')}>*/}
                        {/*    <h3>About 페이지로 이동</h3>*/}
                        {/*    <p>이 박스를 클릭하면 이동합니다</p>*/}
                        {/*</Card>*/}
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </>
    );
};
//운세 이미지 데이터
const fortunes = [
    {img: fortune1,text: "오늘은 귀인을 만날 운세입니다",},
    {img: fortune2,text: "뜻밖의 행운이 당신을 찾아옵니다",},
    {img: fortune3,text: "하루를 웃음으로 시작하세요",},
];

const SwiperContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
    text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardText = styled.p`
  margin: 16px;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;
// ✅ 전체 Header를 감싸는 바깥 Wrapper (배경과 수직 패딩 담당)
const HeaderWrapper = styled.div`
    display: flex;                     // 내부 요소를 가로로 배치
    justify-content: center;          // 가운데 정렬 (HeaderInner를 중앙으로)
    width: 100%;                      // 전체 가로 너비 차지
    padding: 16px 0;                  // 위아래 패딩만 적용 (좌우는 안 함)
    box-sizing: border-box;           // padding 포함한 전체 크기 계산
    background-color: white;          // 배경색 흰색
`;

// ✅ 실제 콘텐츠가 들어가는 내부 컨테이너 (가운데 정렬된 고정 폭 박스)
const HeaderInner = styled.div`
    width: 100%;                      // 너비는 100%로 두되
    max-width: 480px;                 // 최대 너비를 480px로 제한 (양옆 고정)
    padding: 0 16px;                  // 좌우 여백 확보
    display: flex;                    // 좌우로 요소 배치
    justify-content: space-between;  // 왼쪽 요소와 오른쪽 요소를 양 끝으로 정렬
    align-items: center;             // 세로 중앙 정렬
`;

// ✅ 왼쪽 텍스트: "운세"
const LeftText = styled.div`
    font-size: 1.5rem;                // 글자 크기
    font-weight: bold;               // 굵은 글씨
`;

// ✅ 오른쪽 영역: "선택 게스트님 🔄" 구성
const RightSection = styled.div`
    display: flex;                   // 가로로 배치
    align-items: center;            // 세로 중앙 정렬
    gap: 6px;                       // 항목 간 간격
`;

// ✅ "선택" 회색 글자
const GrayText = styled.span`
    color: gray;                    // 회색 텍스트
    font-size: 0.9rem;              // 약간 작은 글자
`;

// ✅ "게스트님" 강조 글자
const BoldText = styled.span`
    font-weight: bold;             // 굵은 글씨
    font-size: 1rem;               // 일반적인 글자 크기
`;



export default FortuneSwiper;