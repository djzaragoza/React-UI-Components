import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from '../CardComponents/CardContent';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import FooterComponent from '../FooterComponents/Footer';
import '../FooterComponents/Footerevents.js';

const CardContainer = () => {
    return (
        <div className="big_container">
            <HeaderContainer/>
            <CardBanner/>
            <CardContent/>
            <FooterComponent/>
        </div>
    )
}

export default CardContainer;