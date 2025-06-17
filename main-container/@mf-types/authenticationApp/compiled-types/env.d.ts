interface Env {
    mode: string | undefined;
    api: {
        GOOGLE_AUTHENTICATION_URL: string | undefined;
        KAKAO_AUTHENTICATION_URL: string | undefined;
    };
}
declare const env: Env;
export default env;
