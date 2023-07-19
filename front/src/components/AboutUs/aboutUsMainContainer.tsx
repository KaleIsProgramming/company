import { useEffect } from "react";
import styled from "@emotion/styled";
import { CompanyDescription, ExpertsList } from "./";
import { useAppDispatch } from "../../store";
import { fetchExperts, fetchQualityTime } from "../../store/slices";

export const AboutUsMainContainer = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchExperts());
        dispatch(fetchQualityTime());
    },[]);

    return(
        <StyledAboutUsMainContainer>
            <CompanyDescription />
            <StyledHeading>Nasi Eksperci</StyledHeading>
            <ExpertsList />
        </StyledAboutUsMainContainer>
    );
};

const StyledAboutUsMainContainer = styled.div`
    height: 100%;
    width: 70%;
    margin-left: 15%;

    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: #00AFFF;
        border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
        background:#D9D9D9;
        border-radius: 20px;
        margin-top: 70px;
        margin-bottom: 70px;
    }
`;

const StyledHeading = styled.h1`
    margin: 0 0 2% 3%;
`;