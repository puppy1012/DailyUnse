import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";

const items = [
    { src: "https://img.jeomsin.co.kr/mz_main_menu/srRtoWx0hLYAXMQf.png", label: "신년운세", isNew: false },
    { src: "https://img.jeomsin.co.kr/mz_main_menu/bhBFo617ZJvcXR5T.png", label: "토정비결", isNew: false },
    { src: "https://img.jeomsin.co.kr/mz_main_menu/hO1EtjlR3w8UnMKb.png", label: "정통사주", isNew: false },
    { src: "https://img.jeomsin.co.kr/mz_main_menu/h21bOcmwYeqSE73d.png", label: "오늘의 운세", isNew: false },
    { src: "https://img.jeomsin.co.kr/mz_main_menu/mPwIMitW4hNG2TLC.png", label: "내일의 운세", isNew: false },
    { src: "https://img.jeomsin.co.kr/mz_main_menu/mSAoRHyOPZrzVtuC.png", label: "지정일 운세", isNew: false }
];

const App = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleIconClick = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="app-wrapper">
            <div className="card">
                <p className="subtitle">소름 돋는 <span className="highlight">미래 예측</span></p>
                <h1 className="title">가장 정확한 사주 풀이</h1>

                <div className="grid">
                    {items.map((item, idx) => (
                        <div key={idx} className="grid-item">
                            <div className="image-wrapper" onClick={handleIconClick}>
                                <img src={item.src} alt={item.label} className="icon" />
                            </div>
                            <span className="label">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>


            {isModalOpen && (
                <div className="modal-backdrop" onClick={closeModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>x</button>
                        <h2>당신의 앞날이 궁금하다면?</h2>
                        <p>지금 사주정보를 입력하고 점신에서 알아봐요!</p>
                        <button className="yellow-button">점신 시작하기</button>
                        <button className="gray-button">기존 회원 로그인하기</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
