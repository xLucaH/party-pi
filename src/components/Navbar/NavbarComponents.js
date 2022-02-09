import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #8E4869;
height: 60px;
display: flex;
justify-content: space-between;
padding: 0.2rem;
z-index: 12;
`;

export const NavLink = styled(Link)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
    color: #C596AD;
    font-weight:600;
}`;

export const NavMenu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 325px) {
    display: none;
}
`;

export const Logo = styled.img`
max-height: 100%;
padding: 0 24px;
`
