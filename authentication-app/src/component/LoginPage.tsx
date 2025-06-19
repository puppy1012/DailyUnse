import React from 'react'
import SocialLoginButton from './SocialLoginButton'
import { useOAuth } from '../hooks/useOAuth';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const { login } = useOAuth()
    const navigate = useNavigate()

    return (
        <Wrapper>
            {/* 구글, 카카오 로그인 버튼 */}
            <SocialLoginButton provider="google" onClick={() => login('google')} />
            <SocialLoginButton provider="kakao"  onClick={() => login('kakao')} />

            {/* “시작하기” 버튼 */}
            <StartBtn onClick={() => navigate('/start-jeomsin')}>시작하기</StartBtn>
        </Wrapper>
    )
}



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
`// “시작하기” 버튼 스타일 (하드코딩)
// “시작하기” 버튼 스타일 정의 (KakaoImgBtn과 같은 패턴으로)
const StartBtn = styled.button`
    cursor: pointer;                   // 클릭 가능한 커서
    display: block;                    // 블록 요소로 변경
    width: 100%;                       // 부모 너비에 맞추기
    max-width: 184px;                  // 최대 너비 제한
    margin: 16px auto;                 // 상하 16px, 좌우 중앙 정렬
    padding: 11px 10px;                // 내부 여백
    border: none;                      // 테두리 제거
    border-radius: 4px;                // 둥근 모서리
    background-color: #ffb400;         // 버튼 배경색
    color: white;                      // 텍스트 색상
    font-size: 14px;                   // 글자 크기
    font-weight: 700;                  // 글자 두께
    font-family: 'Pretendard', sans-serif;
    transition: all 0.2s ease-in;      // 호버 시 애니메이션

    &:hover {
        transform: scale(1.1);           // 확대 효과
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  // 그림자 효과
    }
`;