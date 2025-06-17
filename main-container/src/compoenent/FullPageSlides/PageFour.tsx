import React from 'react';
import * as Styled from './styled'; // styled.ts에 공통 정의된 스타일 가져오기

const PageFour = () => {
    return (
        <Styled.Section>
            <Styled.ContentWrapper>
                <Styled.Spacing height={5} />
                <Styled.StepCircle>04</Styled.StepCircle>
                <Styled.Spacing height={20} />
                <Styled.Title>더 편리한 전화 상담!</Styled.Title>
                <Styled.Spacing height={20} />
                <Styled.Description>
                    고민으로 잠 못이룬다면 점신이 검증한<br />
                    400여명의 멘토를 지금 만나보세요.
                </Styled.Description>
                <Styled.Spacing height={16} />
                <Styled.ImageWrapper>
                    <Styled.StyledImage
                        src="https://www.jeomsin.co.kr/web_only/app_usage_guide/counsel.webp"
                        alt="상담 이미지"
                    />
                </Styled.ImageWrapper>
            </Styled.ContentWrapper>
        </Styled.Section>
    );
};

export default PageFour;
