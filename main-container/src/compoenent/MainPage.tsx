import React from 'react';
import FortuneSwiper from "./FortuneSwiper";
import TodayQuote from "./TodayQuote";
import InnerMenuBar from "./InnerMenuBar";
import { useLocation } from "react-router-dom";// ✅ React Router에서 현재 위치 정보(location)를 가져오기 위한 훅 import


// ✅ 메인 페이지 컴포넌트 정의
export default function MainPage() {
    // ✅ 이전 페이지에서 navigate("/main", { state: { name } }) 로 전달된 state 읽기
    const location = useLocation();
    const { name } = location.state || {}; // 전달된 name이 없을 경우 대비해 || {} 처리

    return (
        <>
            {/*/!* ✅ name이 있을 경우에만 인사 메시지를 출력 *!/*/}
            {/*{name && (*/}
            {/*    <div style={{ padding: "16px", fontWeight: "bold", fontSize: "18px" }}>*/}
            {/*        {name}님, 안녕하세요 👋*/}
            {/*    </div>*/}
            {/*)}*/}

            {/* ✅ FortuneSwiper 컴포넌트에 props로 name 전달 */}
            <FortuneSwiper name={name} />

            {/* ✅ 오늘의 명언 컴포넌트 출력 */}
            <TodayQuote />

            {/* ✅ 하단 내비게이션 바 출력 */}
            <InnerMenuBar />
        </>
    );
}