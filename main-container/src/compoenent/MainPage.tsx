import React from 'react';
import FortuneSwiper from "./FortuneSwiper";
import TodayQuote from "./TodayQuote";
import InnerMenuBar from "./InnerMenuBar";

export default function MainPage() {
  return (
      <>
        <FortuneSwiper />
        <TodayQuote />
        <InnerMenuBar />
      </>
  );
}