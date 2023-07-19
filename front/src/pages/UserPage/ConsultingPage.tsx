import styled from "@emotion/styled";
import { ConsultingContainer } from '../../components/Consulting';

export const ConsultingPage = () => {

    return(
        <StyledConsultingPage>
            <ConsultingContainer />
        </StyledConsultingPage>
    );
};

const StyledConsultingPage = styled.div`
    height: 100%;
    width: 100%;
`;