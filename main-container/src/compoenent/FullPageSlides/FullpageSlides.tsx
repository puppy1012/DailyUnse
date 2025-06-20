import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import styled from "styled-components";
import Header from "../Header";
import NavBar from "../NavBar";

const HeaderSection = styled.div`
    display: flex;
    position: absolute;
    max-width: 480px;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 10px 24px 0;
    box-Shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    top:0;
    left:0;
    right:0;
    z-index: 100;
`

export const FullpageSlides = () => {
    return (
        <>
            {/* ────────────── HeaderSection ──────────────
                화면 상단에 고정되는 헤더 영역.
                position: absolute 대신 부모 영역 밖에서도 잘 보이도록 내부 스타일 설정.
            */}
            <HeaderSection>
                {/* Header 컴포넌트: 로고, 네비게이션 등을 표시 */}
                <Header />
            </HeaderSection>

            {/* ────────────── Swiper (전체 슬라이드 컨테이너) ──────────────
                direction="vertical"       => 수직 스크롤 슬라이드
                slidesPerView={1}          => 한 번에 하나의 슬라이드만 보여줌
                mousewheel={{ forceToAxis: true }} => 수직축 휠 스크롤 강제 적용
                modules={[Mousewheel]}     => 마우스휠 모듈 로드
                style={{…}}                => 화면 전체 고정, 배경, 크기 등
            */}
            <Swiper
                direction="vertical"            // 슬라이드가 수직 방향으로 이동하도록 설정
                slidesPerView={1}               // 한 번에 보여줄 슬라이드 개수를 1개로 고정
                mousewheel={{ forceToAxis: true }} // 마우스 휠로 스크롤할 때 수직 축으로만 강제 스크롤을 적용
                modules={[Mousewheel]}          // Swiper에 마우스 휠 제어 기능을 제공하는 Mousewheel 모듈을 로드
                style={{
                    width: "100vw",           // 브라우저 가로 전체
                    height: "100vh",          // 브라우저 세로 전체
                    position: "fixed",        // 스크롤해도 고정
                    top: 0,                   // 상단 0 위치
                    left: 0,                  // 좌측 0 위치
                    right: 0,                 // 우측 0 위치
                    backgroundColor: "#f9f9f9", // 전체 배경 색상
                }}
            >
                {/*
                  ──────── 슬라이드 반복 렌더링 ────────
                  [PageOne, PageTwo, …] 배열을 map 돌려서
                  각 컴포넌트를 SwiperSlide로 감싸줌
                */}
                {[PageOne, PageTwo, PageThree, PageFour, PageFive].map(
                    (Component, i) => (
                        <SwiperSlide key={i}>
                            {/* ─────────── 슬라이드 내부 컨테이너 ───────────
                          maxWidth: 480px 까지만 넓이를 제한해 모바일 뷰 최적화
                          margin: 상단 50px 띄우고 수평 중앙 정렬
                          paddingTop: 내부 상단 여백
                          overflow: hidden: 자식이 넘칠 경우 잘라냄
                          boxShadow: 카드 느낌 주는 그림자
                      */}
                            <div
                                style={{
                                    maxWidth: "480px",
                                    margin: "50px auto 0",
                                    height: "100%",
                                    paddingTop: "10px",
                                    overflow: "hidden",
                                    backgroundColor: "#fff",
                                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)",
                                }}
                            >
                                {/* 실제 페이지 컴포넌트 출력 */}
                                <Component />
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>

            {/* ──────────── NavBar (주석 처리) ────────────
              나중에 필요하면 주석 해제하면 됨.
            */}
            {/* <NavBar /> */}
        </>
    );
};

export default FullpageSlides;