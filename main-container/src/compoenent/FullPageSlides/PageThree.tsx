import React from 'react';
import * as Styled from './styled'; // styled.ts에 정의된 공통 스타일들

const PageThree = () => {
    return (
        <Styled.Section>
            <Styled.ContentWrapper>
                <Styled.Spacing height={10} />
                <Styled.StepCircle>03</Styled.StepCircle>
                <Styled.Spacing height={20} />
                <Styled.Title>데일리 맞춤 운세</Styled.Title>
                <Styled.Spacing height={20} />
                <Styled.Description>
                    행운보고서와 함께라면 오늘의 고민 끝!<br />
                    코디부터 요리, 부동산, 골프까지
                </Styled.Description>
                <Styled.Spacing height={16} />
                <Styled.ImageWrapper>
                    <Styled.StyledImage
                        src="https://www.jeomsin.co.kr/web_only/app_usage_guide/lucky_report.webp"
                        alt="행운 리포트 이미지"
                    />
                </Styled.ImageWrapper>
            </Styled.ContentWrapper>
        </Styled.Section>
    );
};

export default PageThree;
