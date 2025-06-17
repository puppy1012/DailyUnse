import styled from 'styled-components';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import {useNavigate} from "react-router-dom";


export default function NavBar() {
    const navigate = useNavigate();

    return (<BottomNavWrapper>
            <NavItem onClick={() => navigate("/fullpage")}>
                <FaIcons.FaBook/>
                점신
            </NavItem>
            <NavItem onClick={() => navigate("/")}>
                <GiIcons.GiCrystalBall/>
                운세
            </NavItem>
            <NavItem>
                <GiIcons.GiCardRandom/>
                타로
            </NavItem>
            <NavItem>
                <MdIcons.MdSupportAgent/>
                상담
            </NavItem>
            <NavItem>
                <FaIcons.FaShoppingBag/>
                점신몰
            </NavItem>
        </BottomNavWrapper>);
}


const BottomNavWrapper = styled.nav`
    position: fixed; /* ✅ 핵심: 하단 고정 */
    transform: translateX(-50%); /* 가운데 정렬 */
    display: flex;
    width: 100%;
    max-width: 480px;
    height: 64px;
    margin-top: auto;
    /* padding: 0 24px; */
    left: 50%;
    bottom: 0;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-top: 1px solid #efefef;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.05);
    margin-top: auto;
    z-index: 100;
`;

const NavItem = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    color: #1f2937;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    svg {
        font-size: 22px;
        margin-bottom: 4px;
    }

    &:hover {
        color: #3448FF; /* Tailwind의 blue-600 */
    }
`;