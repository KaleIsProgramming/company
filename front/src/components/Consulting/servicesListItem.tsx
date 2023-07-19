import { FC, useState } from 'react';
import styled from "@emotion/styled";
import { Service } from "../../store/slices";

interface ServiceData {
    data: Service
}


export const ServicesListItem: FC<ServiceData> = ({data}) => {
    const [isOpened, setIsOpened] = useState(false);
    return(
        <>
            {
                isOpened ?
                <StyledOpenedContainer>
                    <h2>{data.nazwa}</h2>
                    <h4>{data.text}</h4>
                    <p onClick={() => setIsOpened(false)}>ZWIŃ</p>
                </StyledOpenedContainer>
                :
                <StyledClosedContainer>
                    <h2>{data.nazwa}</h2>
                    <p onClick={() => setIsOpened(true)}>ROZWIŃ</p>
                </StyledClosedContainer>
            }
        </>
    );
};

const StyledClosedContainer = styled.div`
    height: 50%;
    width: 100%;
    box-shadow: 1px 1px 10px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 5%;
    margin-top: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration-line: underline;
        color: #00B1FF;
        cursor: pointer;
    }
`;

const StyledOpenedContainer = styled.div`
    min-height: 100%;
    width: 100%;
    box-shadow: 1px 1px 10px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 5%;
    margin-top: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
        height: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h4 {
        height: calc(100% - 14rem);
        width: 90%;
    }

    p {
        height: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration-line: underline;
        color: #00B1FF;
        cursor: pointer;
    }
`;