import styled from "@emotion/styled";
import { ContactContainer } from "../../components/Contact";

export const ContactPage = () => {

    return(
        <StyledContactPage>
            <ContactContainer />
        </StyledContactPage>
    );
};


const StyledContactPage = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center
`;