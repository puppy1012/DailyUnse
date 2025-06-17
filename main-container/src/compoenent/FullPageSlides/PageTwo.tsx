import * as Styled from './styled';
import PageOne from "@/compoenent/FullPageSlides/PageOne.tsx";

const PageTwo = () => {
    return (
        <Styled.Section>
            <Styled.ContentWrapper>
                <Styled.Spacing height={0} />
                <Styled.StepCircle>02</Styled.StepCircle>
                <Styled.Spacing height={20} />
                <Styled.Title>함께라서 더 좋은날!</Styled.Title>
                <Styled.Spacing height={20} />
                <Styled.Description>
                    인맥보고서를 통해 우리의 운이<br />
                    조화로운 날을 알아보세요.
                </Styled.Description>
                <Styled.Spacing height={16} />
                <Styled.ImageWrapper>
                    <Styled.StyledImage
                        src="https://www.jeomsin.co.kr/web_only/app_usage_guide/personal_connection_report.webp"
                        alt="인맥 리포트 이미지"
                    />
                </Styled.ImageWrapper>
            </Styled.ContentWrapper>
        </Styled.Section>
    );
};
export default PageTwo;