import styled from "@emotion/styled";
import { Form } from "../../components/Courses/";

export const FormPage = () => {

    return(
        <StyledFormPage>
            <Form />
        </StyledFormPage>
    );
};

const StyledFormPage = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;