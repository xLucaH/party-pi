import { BsInstagram as Instagram } from 'react-icons/bs';
import { BsYoutube as Youtube } from 'react-icons/bs';
import React from 'react';

import { FooterContainer, Images, Text } from './FooterComponents';

const Footer = () => {
    return (
        <FooterContainer>
            <Images>
                <Instagram style={{ fontSize: '175%' }} />
                <Text> Stay up to date with our youtube and instagram channels!</Text>
                <Youtube style={{ fontSize: '175%' }} />
            </Images>
        </FooterContainer>);
};

export default Footer;




