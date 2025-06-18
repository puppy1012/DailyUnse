import { useState, useEffect } from "react";

export default function FortuneForm() {
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [fortuneList, setFortuneList] = useState<string[]>([]);
    const [result, setResult] = useState<string | null>(null);

    // 운세 JSON 불러오기
    useEffect(() => {
        fetch("/assets/fortuneForm/fortuneForm.json")
            .then(res => res.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomFortune = data[randomIndex];
                setResult(randomFortune); // ✅ title + content 객체 저장
            })
            .catch(err => console.error("운세 파일 로딩 실패:", err));
    }, []);

    const getAge = (birthDate: string): number => {
        const today = new Date();
        const birthD = new Date(birthDate);
        let age = today.getFullYear() - birthD.getFullYear();
        const m = today.getMonth() - birthD.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthD.getDate())) {
            age--;
        }
        return age;
    };

    const getFortune = () => {
        if (!name || !birth || fortuneList.length === 0) return;
        const age = getAge(birth);
        const randomFortune = fortuneList[Math.floor(Math.random() * fortuneList.length)];
        setResult(`${age}세 ${name}님의 오늘의 운세는 다음과 같습니다:\n\n${randomFortune}`);
    };

    return (
        <div style={{ padding: "1rem", maxWidth: "480px", margin: "0 auto" }}>
            <h2>🔮 오늘의 운세 확인</h2>

            <input
                type="text"
                placeholder="이름"
                onChange={(e) => setName(e.target.value)}
                style={{ margin: "0.5rem", padding: "0.5rem" }}
            />
            <input
                type="date"
                placeholder="생년월일"
                onChange={(e) => setBirth(e.target.value)}
                style={{ margin: "0.5rem", padding: "0.5rem" }}
            />
            <button onClick={getFortune} disabled={!name || !birth}>
                운세 보기
            </button>

            {result && (
                <div style={{ marginTop: "1rem" }}>
                    <h3>📜 {result.title} 운세</h3>
                    <pre style={{ whiteSpace: "pre-wrap", fontSize: "1rem" }}>{result.content}</pre>
                </div>
            )}
        </div>
    );
}