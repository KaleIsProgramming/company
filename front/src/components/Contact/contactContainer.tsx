import styled from "@emotion/styled";
const icon = require("./images/logoHeader.png");

export const ContactContainer = () => {

    return(
        <StyledContactContainer>
            <RightContainer>
                <img src={icon} alt="icon" />
            </RightContainer>
            <LeftContainer>
                <Content>Adres: <BlueColor></BlueColor></Content>
                <Content>Kod pocztowy: <BlueColor></BlueColor></Content>
                <Content>Miasto: <BlueColor></BlueColor></Content>
                <Content>Tel: <BlueColor></BlueColor></Content>
                <Content>NIP: <BlueColor></BlueColor></Content>
                <Content>Regon: <BlueColor></BlueColor></Content>
            </LeftContainer>
        </StyledContactContainer>
    );
};

const StyledContactContainer = styled.div`
    height: 90%;
    width: 80%;
`;

const LeftContainer = styled.div`
    height: 50%;
    width: 20%;
`;

const RightContainer = styled.div`
    height: 20%;
    display: flex;
    align-items: center;

    img {
        height: 90%;
    }
`;

const Content = styled.div`
    height: 14%;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 150%;
    font-weight: bold;
`;

const BlueColor = styled.span`
    color: #00AFFF;
    margin-left: 1%
`;