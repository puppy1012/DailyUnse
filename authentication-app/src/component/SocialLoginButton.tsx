import React from "react";
import { Google } from "@mui/icons-material";
import styled from "styled-components";

type Provider = "google" | "kakao" | "github";

interface Props {
  provider: Provider;
  onClick: () => void;
}

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
    label: "Google 로그인",
    color: " rgb(79, 137, 254)",
    icon: <Google />,
    type: "button",
  },
  kakao: {
    label: "Kakao 로그인",
    type: "image",
  },
  github: {
    label: "",
    type: "button", // 미사용 처리
  },
};

const OAuthBtn = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "$bgColor",
})<{ $bgColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 184px;
  padding: 11px 10px;
  border: none;
  border-radius: 4px;
  background-color: ${({ $bgColor }) => $bgColor || "#ccc"};
  color: white;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  svg {
    font-size: 20px;
    margin-right: 10px;
  }
`;

const KakaoImgBtn = styled.img`
  cursor: pointer;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 16px auto;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
`;

const SocialLoginButton: React.FC<Props> = ({ provider, onClick }) => {
  const info = providerInfo[provider];

  if (!info.label) return null;

  if (info.type === "button") {
    return (
      <OAuthBtn onClick={onClick} $bgColor={info.color}>
        {info.icon}
        {info.label}
      </OAuthBtn>
    );
  }

  if (info.type === "image") {
    return (
      <KakaoImgBtn
        src="http://localhost:3002/kakao_login.png"
        alt={info.label}
        onClick={onClick}
      />
    );
  }

  return null;
};

export default SocialLoginButton;
