import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Heading = () => {
    const [activePage, setActivePage] = useState('AKTUALNOŚCI');
    const location = useLocation(); 
    
    useEffect(() => {
        switch(location.pathname){
            case '/szkolenia':
                setActivePage('SZKOLENIA');
                break;
            case '/doradztwo':
                setActivePage('DORADZTWO');
                break;
            case '/kontakt':
                setActivePage('KONTAKT');
                break;
            case '/aktualnosci':
                setActivePage('AKTUALNOŚCI');
                break;
            case '/formularz-zgloszeniowy':
                setActivePage('SZKOLENIA');
                break;
            case '/':
                setActivePage('O NAS');
                break;
            default:
                if(location.pathname.includes('/szkolenie')) {
                    setActivePage('SZKOLENIA');
                } else if(location.pathname.includes('/szkolenie')) {
                    setActivePage('SZKOLENIA');
                }
                break;
        }
    },[location]);

    return(
        <StyledHeading>
            <ContentContainer>{activePage}</ContentContainer>
        </StyledHeading>
    );
};

const StyledHeading = styled.div`
    height: 18%;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
`;

const ContentContainer = styled.div`
    color: #404040;
    margin-left: 5%;
    font-size: 250%;
    font-weight: 800;
`;
