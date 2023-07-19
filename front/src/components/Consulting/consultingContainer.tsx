import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useAppDispatch } from '../../store';
import { fetchServices } from '../../store/slices';
import { TopNote, ServicesList } from './';

export const ConsultingContainer = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchServices());
    },[]);

    return (
        <StyledConsultingContainer>
            <TopSection>
                <TopNote />
            </TopSection>
            <BottomSection>
                <ServicesList />
            </BottomSection>
        </StyledConsultingContainer>
    );
};

const StyledConsultingContainer = styled.div`
    height: 100%;
    width: 90%;
    
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

const TopSection = styled.div`
    height: 40%;
    width: 100%;
`;

const BottomSection = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
`;