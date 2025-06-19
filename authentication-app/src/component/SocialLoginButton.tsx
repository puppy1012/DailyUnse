import React from "react";
import { Google } from "@mui/icons-material";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// 지원 가능한 소셜 로그인 공급자 타입 정의
// "google", "kakao", "github" 중 하나여야 함
//여기를 기준으로 불러오는 순서가 정해짐
type Provider = "kakao" | "google" | "github";

// SocialLoginButton 컴포넌트가 받을 Props 인터페이스 정의
interface Props {
  provider: Provider;    // 사용할 소셜 로그인 공급자
  onClick: () => void;   // 버튼 클릭 시 호출할 콜백 함수
}

// 각 공급자별 버튼 정보 매핑 객체 정의
// label: 버튼에 표시할 텍스트
// color: (버튼 타입인 경우) 배경 색상
// icon: (버튼 타입인 경우) 표시할 아이콘 컴포넌트
// type: "button" 또는 "image" 타입 지정
const providerInfo: Record<
    Provider,
    {
      label: string;
      color?: string;
      icon?: React.ReactNode;
      type: "button" | "image";
    }
> = {
  google: {
    label: "Google 로그인",                   // 구글 로그인 텍스트
    color: " rgb(79, 137, 254)",               // 구글 버튼 배경색
    icon: <Google />,                          // MUI Google 아이콘
    type: "button",                           // 버튼 타입 지정
  },
  kakao: {
    label: "Kakao 로그인",                    // 카카오 로그인 텍스트
    type: "image",                            // 이미지를 버튼으로 사용
  },
  github: {
    label: "",                                // 사용하지 않으므로 빈 문자열
    type: "button",                           // 버튼 타입 (실제로 렌더링되지 않음)
  },
};

// “시작하기” 버튼 스타일 (하드코딩)
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

// OAuth 버튼 공통 스타일 정의
// $bgColor prop으로 배경 색상을 동적으로 설정
const OAuthBtn = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "$bgColor",
})<{ $bgColor?: string }>`
  display: flex;                     // 내부 요소(아이콘+텍스트) 가로 배치
  align-items: center;              // 세로 가운데 정렬
  justify-content: center;          // 가로 가운데 정렬
  gap: 8px;                         // 아이콘과 텍스트 간 간격
  width: 184px;                     // 고정 너비
  padding: 11px 10px;               // 내부 여백
  border: none;                     // 기본 테두리 제거
  border-radius: 4px;               // 둥근 모서리
  background-color: ${({ $bgColor }) => $bgColor || "#ccc"};
  color: white;                     // 텍스트 색상
  font-size: 14px;                  // 글씨 크기
  font-weight: 700;                 // 글씨 굵기
  font-family: 'Pretendard', sans-serif;  // 폰트 패밀리
  cursor: pointer;                  // 마우스 포인터가 버튼 모양으로 변함
  transition: all 0.2s ease-in;     // 호버 시 변화 애니메이션

  &:hover {
    transform: scale(1.1);          // 살짝 확대 효과
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  // 그림자 추가
  }
  svg {
    font-size: 20px;                // 아이콘 크기
    margin-right: 10px;             // 아이콘과 텍스트 사이 간격
  }
`;

// Kakao 이미지 버튼 스타일 정의
const KakaoImgBtn = styled.img`
  cursor: pointer;                  // 클릭 가능 커서
  max-width: 100%;                  // 부모 컨테이너 너비에 맞춤
  height: auto;                     // 높이는 자동 조정
  display: block;                   // 블록 요소로 변경
  margin: 16px auto;                // 상하 16px, 좌우 중앙 정렬
  transition: all 0.2s ease-in;     // 호버 시 애니메이션

  &:hover {
    transform: scale(1.1);          // 확대 효과
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  // 그림자
  }
`;

// SocialLoginButton 컴포넌트 정의
const SocialLoginButton: React.FC<Props> = ({ provider, onClick }) => {
  const info = providerInfo[provider];  // provider에 대응하는 설정 조회
  // const navigate = useNavigate();  // ② navigate 훅 선언
  // label이 비어있거나 정의되지 않았으면 아무것도 렌더링하지 않음
  if (!info.label) return null;

    // 이미지 타입인 경우
    if (info.type === "image") {
        return (
            <KakaoImgBtn
                src="http://localhost:3002/kakao_login.png"  // 카카오 로그인 이미지 경로
                alt={info.label}                               // 접근성 대체 텍스트
                onClick={onClick}                              // 클릭 이벤트 핸들러
            />
        );
    }
  // 버튼 타입인 경우
    if (info.type === "button") {
        return (
            <>
                <OAuthBtn onClick={onClick} $bgColor={info.color}>
                    {info.icon}
                    {info.label}
                </OAuthBtn>

                {/* ③ 하드코딩 방식으로 “시작하기” 버튼 추가 */}
                {/*<StartBtn onClick={() => navigate("/start-jeomsin")}>*/}
                {/*    시작하기*/}
                {/*</StartBtn>*/}
            </>
        );
  }
  // 위 조건에 모두 해당하지 않으면 null 반환
  return null;
};

// 기본 내보내기: SocialLoginButton 컴포넌트
export default SocialLoginButton;
