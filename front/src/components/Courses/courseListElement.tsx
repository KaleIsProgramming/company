import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Courses } from '../../store/slices/courses.slice';

interface CourseData {
    data: Courses
}

export const CourseListElement: FC<CourseData> = ({data}) => {
    const link = '/szkolenie/' + data.id;
    return(
        <StyledCourse>
            <MainContainer>
                <LeftContainer><h3>SZKOLENIE: {data.nazwa}</h3></LeftContainer>
                <RightContainer>
                    <Link to={link}>DOWIEDZ SIĘ WIĘCEJ...</Link>
                </RightContainer>
            </MainContainer>
        </StyledCourse>
    );
};

const StyledCourse = styled.div`
    min-height: 10vh;
    width: 100%;
    display: flex;
    margin: 2% 0 0 2%;
    background: white;
`;

const MainContainer = styled.div`
    width: 95%;
    display: flex;
    box-shadow: 1px 1px 10px 4px rgba(0, 0, 0, 0.25);
`;

const LeftContainer = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;

    h3 {
        margin-left: 10%;
    }
`;

const RightContainer = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: white;
        padding: 5% 10%;
        background: #00AFFF;
        font-size: 80%;
    }
`;