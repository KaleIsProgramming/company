import styled from "@emotion/styled";
import { useAppSelector } from "../../store";

export const CompanyDescription = () => {

    const description = useAppSelector(state => state.qualityTime.opis);

    return(
        <StyledDescription>
            <h1>Parę słów na nasz temat</h1>
            <h4>{description}</h4>
        </StyledDescription>
    );
};

const StyledDescription = styled.div`
    width: 80%;
    margin: 3% 0 3% 3%;
    h1  {
        margin-bottom: 2%;
    }
`;