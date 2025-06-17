interface Env {
    mode: string | undefined;
    api: {
        GOOGLE_AUTHENTICATION_URL: string | undefined;
        KAKAO_AUTHENTICATION_URL: string | undefined;

    };
}

const env: Env = {
    mode: process.env.NODE_ENV,
    api: {
        GOOGLE_AUTHENTICATION_URL: process.env.REACT_APP_GOOGLE_AUTHENTICATION_URL,
        KAKAO_AUTHENTICATION_URL: process.env.REACT_APP_KAKAO_AUTHENTICATION_URL,

    },
};

export default env;