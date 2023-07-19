import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
const logo = require("./images/logo.jpg");

export const Menu = () => {
    const [activePage, setActivePage] = useState('aktualności');
    const location = useLocation();                                

    const buttons = document.getElementsByClassName('nav_link') as HTMLCollectionOf<HTMLAnchorElement>;

    const ButtonStyleHandler = (buttons: HTMLCollectionOf<HTMLAnchorElement>, text: string) => {
        for(let i = 0; i < buttons.length; i++) {
            if(buttons[i].textContent!.toLowerCase() === text) {
                buttons[i].style.background = 'white';
                buttons[i].style.color = '#00AFFF';
            } else {
                buttons[i].style.background = '#00AFFF';
                buttons[i].style.color = 'white';
            }
        }
    }

    ButtonStyleHandler(buttons, activePage);

    useEffect(() => {
        switch(location.pathname){
            case '/szkolenia':
                setActivePage('szkolenia');
                break;
            case '/doradztwo':
                setActivePage('doradztwo');
                break;
            case '/kontakt':
                setActivePage('kontakt');
                break;
            case 'aktualnosci':
                setActivePage('aktualności');
                break;
            case '/formularz-zgloszeniowy':
                setActivePage('szkolenia');
                break;
            case '/':
                setActivePage('o nas');
                break;
            default:
                if(location.pathname.includes('/szkolenie')) {
                    setActivePage('szkolenia');
                } else if(location.pathname.includes('/szkolenie')) {
                    setActivePage('aktualności')
                }
                break;
        }
    },[]);

    useEffect(() => {
        const buttons = document.getElementsByClassName('nav_link') as HTMLCollectionOf<HTMLAnchorElement>;
        ButtonStyleHandler(buttons, activePage)
    },[activePage]);


    return(
        <StyledMenu>
            <LogoContainer>
                <LogoCircle>
                    <img src={logo} alt="Logo" />
                </LogoCircle>
            </LogoContainer>
            <ButtonContainer>
                <Link className="nav_link" to='/doradztwo' onClick={() => setActivePage('doradztwo')}>Doradztwo</Link>
                <Link className="nav_link" to='/szkolenia' onClick={() => setActivePage('szkolenia')}>Szkolenia</Link>
                <Link className="nav_link" to='/aktualnosci' onClick={() => setActivePage('aktualności')}>Aktualności</Link>
                <HorizontalLine/>
                <Link className="nav_link" to='/' onClick={() => setActivePage('o nas')}>O nas</Link>
                <Link className="nav_link" to='/kontakt' onClick={() => setActivePage('kontakt')}>Kontakt</Link>
            </ButtonContainer>
        </StyledMenu>
    );
};

const StyledMenu = styled.div`
    height: 100%;
    width: 13vw;
    background: #3E3E3E;
`;

const LogoContainer = styled.div`
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoCircle = styled.div`
    height: 8rem;
    width: 8rem;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        height: 120%;
        width: 120%;
        border-radius: 50%;
    }
`;

const ButtonContainer = styled.div`
   height: 40%; 
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   flex-direction: column;
`;

const HorizontalLine = styled.div`
    height: 2px;
    width: 80%;
    background: #00AFFF;
`;


