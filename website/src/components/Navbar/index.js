import React from 'react';
import { NavMenu, NavLink, Nav, Logo } from './NavbarComponents';
import PiLogo from '../../assets/images/party-pi_logo_2.png';

const Navbar = () => {
    return (
        <Nav>
            <NavMenu>
                <Logo src={PiLogo} />
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/businessCanvas'>
                    Business Canvas
                </NavLink>
                <NavLink to='/moscowMethod'>
                    MoSCoW Method
                </NavLink>
            </NavMenu>
        </Nav>)
        ;
};

export default Navbar;
