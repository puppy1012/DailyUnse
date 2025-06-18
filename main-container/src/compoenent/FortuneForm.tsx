import { useState, useEffect } from "react";
import styled from "styled-components";



export default function FortuneForm() {
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [fortuneList, setFortuneList] = useState<{ title: string; content: string }[]>([]);
    const [result, setResult] = useState<{ title: string; content: string } | null>(null);

    // ✅ JSON 로딩만 useEffect에서 수행 (랜덤 X)
    useEffect(() => {
        fetch("/assets/fortuneForm/fortuneForm.json")
            .then((res) => res.json())
            .then((data) => setFortuneList(data))
            .catch((err) => console.error("운세 파일 로딩 실패:", err));
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
    const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}.${month}.${day}`;
    };
    const getFortune = () => {
        if (!name || !birth || fortuneList.length === 0) return;
        const age = getAge(birth);
        const today= formatDate(new Date());
        const random = fortuneList[Math.floor(Math.random() * fortuneList.length)];
        setResult({
            title: `만${age}세 ${name}님의 운세~ ♬\n\n${today} 운세의 총운은 "${random.title}"입니다`,

            content: random.content,
        });
    };

    return (
        <Wrapper>
            <h2>🔮 오늘의 운세 확인</h2>

            <Input
                type="text"
                placeholder="이름"
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                type="date"
                placeholder="생년월일"
                onChange={(e) => setBirth(e.target.value)}
            />
            <Button onClick={getFortune} disabled={!name || !birth}>
                운세 보기
            </Button>

            {result ? (
                <ResultBox>
                    <h3>📜 {result.title}</h3>
                    <p>{result.content}</p>
                </ResultBox>
            ) : (
                <ResultBox>
                    <p>🔍 결과가 여기서 출력됩니다.</p>
                </ResultBox>
            )}
        </Wrapper>
    );
}
// ✅ 스타일드 컴포넌트 정의
const Wrapper = styled.div`
  padding: 1rem;
  max-width: 480px;
  margin: 0 auto;
`;

const Input = styled.input`
    margin: 0.5rem 0;
    padding: 0.75rem 1rem;
    width: 100%;

    border: 2px solid #ccc;
    border-radius: 8px;
    background-color: #fdfdfd;
    font-size: 1rem;
    color: #333;

    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #673ab7;
        box-shadow: 0 0 5px rgba(103, 58, 183, 0.3);
        outline: none;
    }

    &::placeholder {
        color: #aaa;
        font-style: italic;
    }
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #673ab7;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ResultBox = styled.div`
  margin-top: 1.5rem;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 12px;
  white-space: pre-wrap;
  font-size: 1rem;
`;