## 📁 주요 기능 구성

## 🔗 구조 요약
SearchPage.tsx
├── MenuSearch.tsx
└── CounselorSearch.tsx

MainPage.tsx
└── InnerMenuBar.tsx
    └── SignUpIntroPage.tsx (/start-jeomsin)
        └── GenderInputPage.tsx (/step2)
            └── BirthInputPage.tsx (/step3)
                └── TimeInputPage.tsx (/step4)

### 1. 검색 기능 (`/search`)
- `SearchPage.tsx`
  - 탭 전환: 메뉴 검색 / 상담사 검색
  - `useState`, `useNavigate` 사용

- `MenuSearch.tsx`
  - 자동 저장, 전체 삭제, 카테고리 필터 기능
  - 모달 UI 및 조건부 렌더링 처리

- `CounselorSearch.tsx`
  - 상담사 목록 조회, 즐겨찾기 기능 구현
  - 향후 API 연동 예정

---

### 2. 사주 입력 플로우 (`/start-jeomsin` → `/step4`)
- 단계별 화면:
  ✅ SignUpIntroPage.tsx (/start-jeomsin)
    시작 버튼 → /step2로 이동
  ✅ GenderInputPage.tsx (/step2)
    성별 선택 (남/여)
    선택 없으면 버튼 비활성화
    navigate("/step3", { state: { name, gender } })로 이동
  ✅ BirthInputPage.tsx (/step3)
    생년월일 + 양력/음력 선택
    state로 전달 받은 데이터 유지하며 다음 단계 이동
  ✅ TimeInputPage.tsx (/step4)
    출생시간 입력 or 모름 체크
    useRef 사용해 포커스 이동 처리
    모든 입력값 취합하여 마지막 단계로 넘길 준비

---

### 3. 상태 전달 방식 (전 단계 공통)
- navagate(path, {state}}로 전달
- 각 페이지에서 useLocation().state로 받아 이어감

---

### 4. 기타 사항
- 중복/하드코딩된 부분 일부 존재(리팩토링 필요)
- fakeAPI 사용
- styled-components기반 스타일링
