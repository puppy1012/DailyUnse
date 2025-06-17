import React from 'react';
import FortuneSwiper from "./FortuneSwiper";
import TodayQuote from "./TodayQuote";
import InnerMenuBar from "./InnerMenuBar";
import { useLocation } from "react-router-dom";

export default function MainPage() {
    const location = useLocation();
    const { name } = location.state || {};


    return (
        <>
            {name && (
                <div style={{ padding: "16px", fontWeight: "bold", fontSize: "18px" }}>
                    {name}님, 안녕하세요 👋
                </div>
            )}
            <FortuneSwiper />
            <TodayQuote />
            <InnerMenuBar />
        </>
    );
}