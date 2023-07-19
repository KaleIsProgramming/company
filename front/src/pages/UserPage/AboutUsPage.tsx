import styled from "@emotion/styled";
import {  AboutUsMainContainer } from '../../components/AboutUs';

export const AboutUsPage = () => {

    return(
        <StyledAboutUsPage>
            <AboutUsMainContainer />
        </StyledAboutUsPage>
    );
};

const StyledAboutUsPage = styled.div`
    height: 100%;
    width: 100%;
`;