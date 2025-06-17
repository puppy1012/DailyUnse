import { useNavigate } from "react-router-dom";
import env from "../env";

export const useOAuth = () => {
  const navigate = useNavigate();

  const login = (provider: "google" | "kakao") => {
    const url =
      provider === "google"
        ? env.api.GOOGLE_AUTHENTICATION_URL
        : env.api.KAKAO_AUTHENTICATION_URL;

    const popup = window.open(url, "_blank", "width=500,height=600");



    if (!popup) {
      alert("팝업 차단되어 있습니다. 팝업 허용 후 다시 시도하세요.");
      return;
    }

    const receiveMessage = (event: MessageEvent) => {
      if (!event.origin.startsWith("http://localhost")) {
        console.warn("❌ 허용되지 않은 origin:", event.origin);
        return;
      }

      const { accessToken } = event.data;

console.log("🔗 열리는 URL:", url);


      if (!accessToken) {
        console.warn("❌ accessToken 없음");
        return;
      }

      localStorage.setItem("userToken", accessToken);
      window.dispatchEvent(new Event("user-token-changed"));
      window.removeEventListener("message", receiveMessage);

      try {
        popup.close();
      } catch (e) {
        console.warn("팝업 닫기 실패:", e);
      }

      setTimeout(() => {
        navigate("/");
      }, 100);
    };



    window.addEventListener("message", receiveMessage);
  };

  return { login };
};
