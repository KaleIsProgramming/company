import { useEffect } from "react";
import styled from "@emotion/styled";
import { ExpertsListElement } from './';
import { useAppSelector } from "../../store";

export const ExpertsList = () => {

    const experts = useAppSelector(state => state.expertsSlice.experts);

    return(
            <StyledExpertListContainer>
                {
                    experts.map(expert => {
                        return <ExpertsListElement items={expert} key={Math.random()}/>
                    })
                }
            </StyledExpertListContainer>
    );
};
 
const StyledExpertListContainer = styled.div`
    width: 100%;
`;