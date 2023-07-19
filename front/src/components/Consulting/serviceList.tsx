import styled from '@emotion/styled';
import { useAppSelector } from '../../store';
import { ServicesListItem } from './';

export const ServicesList = () => {

    const services = useAppSelector(state => state.servicesSlice.services);

    return(
        <StyledSevicesList>
            <HeaderContainer>
                <h1>Jakie Projekty wykonujemy?</h1>
            </HeaderContainer>
            <ListContainer>
                {
                    services.map(service => {
                        return <ServicesListItem data={service} />
                    }) 
                }
            </ListContainer>
        </StyledSevicesList>
    );
};

const StyledSevicesList = styled.div`
    height: 60%;
    width: 60%;
`;

const HeaderContainer = styled.div`
    height: 10%;
    width: 100%;
    margin-top: 6%;
`;

const ListContainer = styled.div`
    height: 86%;
    width: 100%;
`;