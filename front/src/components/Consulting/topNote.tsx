import styled from "@emotion/styled";
import { ChatOutlined } from '@mui/icons-material';

export const TopNote = () => {

    return(
        <Main>
            <StyledTopNote>
                <h1>Czegokolwiek potrzebujesz, my będziemy w stanie Ci doradzić.</h1>
            </StyledTopNote>
            <Line />
            <HowWeWorkContainer>
                <h1>Jak działamy?</h1>
                <h3>Przed rozpoczęciem prac wspólnie z Klientem ustalamy cel, zakres i przebieg realizacji projektu doradczego i podajemy termin jego wykonania. Jesteśmy dostępni, jeśli po realizacji pojawią się pytania. Chętnie prezentujemy i omawiamy wnioski naszych opinii podczas spotkań.</h3>
            </HowWeWorkContainer>
        </Main>
    );
};

const Main = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const StyledTopNote = styled.div`
    height: 50%;
    width: 100%;
    border-radius: 20px;
    margin-top: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#00AFFF;
`;

const Line = styled.div`
    height: 1px;
    width: 60%;
    background: #00AFFF;
`;

const HowWeWorkContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        margin-top: 3%;
        width: 60%;
    }

    h3 {
        margin-top: 1%;
        width: 60%;
    }
`;