import React from 'react';
import * as Styled from './styled'; // styled.ts에서 공통 컴포넌트 불러오기

const PageFive = () => {
    return (
        <Styled.Section>
            <Styled.ContentWrapper>
                <Styled.Spacing height={68} />
                <Styled.Title>궁금한 나의 모든것? <br />점신에선 모두 무료!</Styled.Title>
                <Styled.Spacing height={20} />
                <Styled.Description>지금 설치하고 더 많은 행운을 만나보세요!</Styled.Description>
                <Styled.Spacing height={16} />

                <Styled.ImageWrapper>
                    <Styled.StyledImage
                        src="https://www.jeomsin.co.kr/web_only/app_usage_guide/jeomsin_icon.png"
                        alt="점신 아이콘"
                        style={{ maxWidth: "120px" }} // 아이콘은 크기 조절
                    />
                </Styled.ImageWrapper>

                <Styled.Spacing height={48} />

                <Styled.InstallButtonWrapper>
                    <Styled.InstallButtonText>지금 설치하기</Styled.InstallButtonText>
                </Styled.InstallButtonWrapper>
            </Styled.ContentWrapper>
        </Styled.Section>
    );
};

export default PageFive;