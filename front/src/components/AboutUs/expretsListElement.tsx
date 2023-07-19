import { FC } from "react";
import styled from "@emotion/styled";
import { Expert } from "../../store/slices";

interface ExpertData {
    items: Expert;
}

export const ExpertsListElement:FC<ExpertData> = ({items}) => {

    return(
        <StyledExpertContainer>
            <ExpertContainer>
            <LeftContainer>
                <img src={items.zdjecie} alt="zdjęcie" />
            </LeftContainer>
            <RightContainer>
                <h2>{items.imie} {items.nazwisko}</h2>
                <h3>{items.rola}</h3>
            </RightContainer>
            </ExpertContainer>
        </StyledExpertContainer>
    );
};

const StyledExpertContainer = styled.div`
    height: 20vh;
    width: 100%;
    margin-left: 3%;
    margin-bottom: 5vh;
`;

const ExpertContainer = styled.div`
    height: 100%;
    width: 80%;
    box-shadow: 1px 1px 10px 4px rgba(0, 0, 0, 0.25);
    display: flex;
`;

const LeftContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 80%;
        border-radius: 50%;
    }
`;

const RightContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
        margin-top: 1%;
        margin-bottom: 8%;
        color: #959595;
    }
`;