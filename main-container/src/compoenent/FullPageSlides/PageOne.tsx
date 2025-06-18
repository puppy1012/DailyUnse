import styled from "styled-components";
import * as Styled from './styled';
// import {Section,ContentWrapper,StepCircle,Title,Description,
// ImageWrapper,StyledImage,Spacing} from './styled';
const PageOne = () => {
    return (
        <Styled.Section>
            <Styled.Spacing height={1} />
            <Styled.ContentWrapper>
                <Styled.StepCircle>01</Styled.StepCircle>
                <Styled.Spacing height={20} />
                <Styled.Title>오늘의 운세 분석 완료!</Styled.Title>
                <Styled.Spacing height={20} />
                <Styled.Description>
                    매일매일 행복할 수 있도록 당신만의 맞춤형<br />
                    운세 보고서를 제공해드려요.
                </Styled.Description>
                <Styled.Spacing height={20} />
                <Styled.ImageWrapper>
                    <Styled.StyledImage src="https://www.jeomsin.co.kr/web_only/app_usage_guide/unse_report.webp" alt="운세" />
                </Styled.ImageWrapper>
            </Styled.ContentWrapper>
        </Styled.Section>
    );
};

export default PageOne;
