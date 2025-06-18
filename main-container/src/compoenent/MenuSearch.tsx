import React, {useRef, useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MenuSearch = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState("menu");
    const [modalType, setModalType] = useState<null | "delete" | "disableSave" >(null);
    const [activeCategory, setActiveCategory] = useState("전체");

    const recommendedTags = ["운세", "타로", "상담", "부적"];
    const categories = [
        "전체", "인연/애정", "얼굴/능력", "하루운명", "정통운세", "행운/액운", "생일운명",
    ];
    const categorizedItems = {
        전체: [],
        "인연/애정": ["나의 인연 운세", "별자리 궁합", "연예인 궁합", "정통궁합", "짝궁합", "혈액형 궁합"],
        "얼굴/능력": ["관상", "취업 운세", "능력 평가", "사주 심리분석"],
        하루운명: ["오늘의 운세", "내일의 운세", "지정일 운세", "인맥보고서", "시간대별 운세"],
        정통운세: ["신년운세", "정통사주", "토정비결"],
        "행운/액운": ["행운의 부적", "행운의 번호"],
        생일운명: ["띠 운세", "별자리 운세", "탄생석"]
    };
    categorizedItems["전체"] = [
        ...new Set(Object.values(categorizedItems).flat())
    ];
    const filteredItems = categorizedItems[activeCategory] || [];

    const tabRefs = useRef<{[key : string] : HTMLDivElement | null}> ({});
    const handleCategoryClick = (cat: string) => {
        setActiveCategory(cat);
        const el = tabRefs.current[cat];
        el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    return (
        <Wrapper>
            <Header>
                <BackButton onClick={() => navigate(-1)}>←</BackButton>
                <Title>검색</Title>
            </Header>

            <TabWrapper>
                <Tab selected={tab === "menu"} onClick={() => setTab("menu")}>메뉴 검색</Tab>
                <Tab selected={tab === "counselor"} onClick={() => setTab("counselor")}>상담사 검색</Tab>
            </TabWrapper>

            <SearchInputWrapper>
                <SearchIcon>🔍</SearchIcon>
                <SearchInput placeholder="메뉴를 검색해보세요." />
            </SearchInputWrapper>

            <Section>
                <SectionHeader>
                    <SectionTitle>최근 검색</SectionTitle>
                    <ActionLinks>
                        <ActionText onClick={() => setModalType("delete")}>전체삭제</ActionText>
                        <DividerDot />
                        <ActionText onClick={() => setModalType("disableSave")}>자동저장 끄기</ActionText>
                    </ActionLinks>
                </SectionHeader>
                <SubText>검색 내역이 없어요</SubText>
            </Section>

            <Section>
                <SectionTitle>추천 검색</SectionTitle>
                <TagRow>
                    {recommendedTags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </TagRow>
            </Section>

            <Section>
                <SectionTitle>한눈에 보는 점신</SectionTitle>
                <CategoryTabs>
                    {categories.map((cat) => (
                        <CategoryTab
                            key={cat}
                            ref={(el) => (tabRefs.current[cat] = el)}
                            selected={cat === activeCategory}
                            onClick={() => handleCategoryClick(cat)}
                        >
                            {cat}
                        </CategoryTab>
                    ))}
                </CategoryTabs>
                <List>
                    {filteredItems.map((label) => (
                        <ListItem key={label}>
                            <LeftContent>
                                <StarIcon>☆</StarIcon>
                                {label}
                            </LeftContent>
                            <Arrow>›</Arrow>
                        </ListItem>
                    ))}
                </List>
            </Section>

            {modalType && (
                <ModalBackdrop>
                    <ModalCard>
                        <ModalMessage>
                            {modalType === "delete"
                                ? "최근 검색 내역을 모두 삭제하시겠어요?"
                                : "최근 검색 저장 기능 사용을 중지하시겠어요?"}
                        </ModalMessage>
                        <ModalButtons>
                            <ModalButton onClick={() => setModalType(null)} gray>취소</ModalButton>
                            <ModalButton onClick={() => setModalType(null)}>확인</ModalButton>
                        </ModalButtons>
                    </ModalCard>
                </ModalBackdrop>
            )}
        </Wrapper>
    );
};

export default MenuSearch;

const Wrapper = styled.div`
    padding: 16px;
    font-family: 'Pretendard', sans-serif;
    background-color: #fff;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
`;

const BackButton = styled.button`
    font-size: 18px;
    background: none;
    border: none;
    cursor: pointer;
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
`;

const TabWrapper = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 12px;
    border-bottom: 1px solid #eee;
`;

const Tab = styled.div<{ selected?: boolean }>`
    font-size: 14px;
    font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
    color: ${({ selected }) => (selected ? "black" : "#aaa")};
    padding-bottom: 8px;
    border-bottom: ${({ selected }) => (selected ? "2px solid black" : "none")};
    cursor: pointer;
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
    margin-right: 8px;
    color: #aaa;
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
`;

const SectionTitle = styled.div`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-bottom: 8px;
`;

const ActionLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: #888;
`;

const ActionText = styled.span`
    cursor: pointer;
`;

const DividerDot = styled.span`
    display: inline-block;
    width: 2px;
    height: 2px;
    background: #bbb;
    border-radius: 50%;
`;

const SubText = styled.div`
    font-size: 13px;
    color: #999;
`;

const TagRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
`;

const Tag = styled.div`
    padding: 6px 12px;
    background-color: #f3f3f3;
    border-radius: 16px;
    font-size: 13px;
`;

const CategoryTabs = styled.div`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    gap: 8px;
    padding-bottom: 4px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const CategoryTab = styled.div<{ selected?: boolean }>`
    font-size: 13px;
    color: ${({ selected }) => (selected ? '#000' : '#aaa')};
    font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
    background-color: ${({ selected }) => (selected ? 'yellow' : 'transparent')};
    padding: 2px 4px;
    border-radius: 4px;
    cursor: pointer;
`;

const List = styled.ul`
    padding-left: 0;
    list-style: none;
`;

const ListItem = styled.li`
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #222;
`;

const LeftContent = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const StarIcon = styled.span`
    color: #ccc;
`;

const Arrow = styled.span`
    font-size: 16px;
    color: #ccc;
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
