import React from "react";
type Provider = "google" | "kakao" | "github";
interface Props {
    provider: Provider;
    onClick: () => void;
}
declare const SocialLoginButton: React.FC<Props>;
export default SocialLoginButton;
