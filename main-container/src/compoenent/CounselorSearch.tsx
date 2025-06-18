import React, {useState} from "react";
import styled from "styled-components";

const CounselorSearch = () => {
    const fields = ["종합운세", "궁합", "연애"];
    const counselors = ["김신", "카로토", "혜광철리원", "천운"];
    const [isAutoSaveOn, setIsAutoSaveOn] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedField, setSelectedField] = useState<string | null>(null);
    const [selectedCounselor, setSelectedCounselor] = useState<string | null>(null);

    return (
        <Wrapper>
            <SearchInputWrapper>
                <SearchIcon>🔍</SearchIcon>
                <SearchInput placeholder="상담사를 검색해 보세요." />
            </SearchInputWrapper>

            <Section>
                <SectionHeader>
                    <SectionTitle>최근 검색</SectionTitle>
                    <SectionActions>
                        {isAutoSaveOn && (
                            <ActionText onClick={() => setShowDeleteModal(true)}>
                                전체삭제
                            </ActionText>
                        )}
                        {isAutoSaveOn && <DividerDot />}
                        <ActionText onClick={() => setIsAutoSaveOn(!isAutoSaveOn)}>
                            {isAutoSaveOn ? "자동저장 끄기" : "자동저장 켜기"}
                        </ActionText>
                    </SectionActions>
                </SectionHeader>

                <SubText>
                    {isAutoSaveOn
                        ? "최근 검색 저장 기능이 켜져있어요."
                        : "최근 검색 저장 기능이 꺼져있어요."}
                </SubText>
            </Section>

            <Section>
                <SectionHeader>
                    <SectionTitle>추천 상담 분야</SectionTitle>
                    <ViewAll>전체 상담 분야 보기</ViewAll>
                </SectionHeader>
                <TagRow>
                    {fields.map((field) => (
                        <Tag
                            key={field}
                            onClick={() =>
                                setSelectedField((prev) => (prev === field ? null : field))
                            }
                            selected={selectedField === field}
                        >
                            {field}
                        </Tag>
                    ))}
                </TagRow>
            </Section>


            <Section>
                <SectionTitle>추천 상담사</SectionTitle>
                <TagRow>
                    {counselors.map((name) => (
                        <Tag
                            key={name}
                            onClick={() =>
                                setSelectedCounselor((prev) => (prev === name ? null : name))
                            }
                            selected={selectedCounselor === name}
                        >
                            {name}
                        </Tag>
                    ))}
                </TagRow>
            </Section>

            {showDeleteModal && (
                <ModalBackdrop>
                    <ModalCard>
                        <ModalMessage>최근 검색 내역을 모두 삭제하시겠어요?</ModalMessage>
                        <ModalButtons>
                            <ModalButton onClick={() => setShowDeleteModal(false)} gray>
                                취소
                            </ModalButton>
                            <ModalButton onClick={() => {
                                console.log("삭제 실행됨");
                                setShowDeleteModal(false);
                            }}>
                                확인
                            </ModalButton>
                        </ModalButtons>
                    </ModalCard>
                </ModalBackdrop>
            )}

        </Wrapper>
    );
};

export default CounselorSearch;

const Wrapper = styled.div`
    //padding: 16px;
    font-family: 'Pretendard', sans-serif;
    background-color: #fff;
`;

const SearchInputWrapper = styled.div`
    background-color: #f5f5f5;
    border-radius: 12px;
    padding: 10px 12px;
    margin: 16px 0;
    display: flex;
    align-items: center;
`;

const SearchIcon = styled.span`
    font-size: 16px;
    color: #bbb;
    margin-right: 8px;
`;

const SearchInput = styled.input`
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
    color: #444;
`;

const Section = styled.div`
    margin-bottom: 24px;
`;

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

const SectionTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #333;
`;

const SectionActions = styled.div`
    display: flex;
    gap: 8px;
`;

const ActionText = styled.span`
    font-size: 12px;
    color: #999;
    cursor: pointer;
`;

const SubText = styled.div`
    font-size: 13px;
    color: #999;
`;

const ViewAll = styled.div`
    font-size: 12px;
    color: #999;
    cursor: pointer;
`;

const TagRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
`;

const Tag = styled.div<{ selected: boolean }>`
    padding: 8px 12px;
    border-radius: 20px;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s;

    font-size: 12px;
    font-weight: 400;

    background-color: ${({ selected }) =>
            selected ? "#fffbe6" : "#f2f2f2"};
    border: 1.5px solid
    ${({ selected }) => (selected ? "#facc15" : "transparent")};
    color: ${({ selected }) => (selected ? "#d97706" : "inherit")};

    &:hover {
        background-color: ${({ selected }) =>
                selected ? "#fff3c4" : "#e5e5e5"};
    }

    &:active {
        transform: scale(0.96);
    }
`;

const DividerDot = styled.span`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: #bbb;
  margin: 0 8px;
  display: inline-block;
  vertical-align: middle;
`;

const ModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalCard = styled.div`
    background: #fff;
    padding: 24px;
    border-radius: 20px;
    width: 80%;
    max-width: 360px;
    text-align: center;
`;

const ModalMessage = styled.p`
    font-size: 16px;
    margin-bottom: 24px;
`;

const ModalButtons = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
`;

const ModalButton = styled.button<{ gray?: boolean }>`
    flex: 1;
    padding: 12px 0;
    font-size: 15px;
    font-weight: bold;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    background-color: ${({ gray }) => (gray ? '#eee' : '#fff200')};
    color: ${({ gray }) => (gray ? '#333' : '#000')};
`;
