import styled from "@emotion/styled";
import { OpenedArticle } from "../../components/News";

export const OpenedArcticlePage = () => {

    return(
        <StyledOpenedArcticlePage>
            <OpenedArticle />
        </StyledOpenedArcticlePage>
    );
};

const StyledOpenedArcticlePage = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;