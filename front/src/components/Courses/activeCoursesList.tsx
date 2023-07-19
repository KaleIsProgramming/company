import { FC } from 'react';
import styled from '@emotion/styled';
import { CourseListElement } from '.';
import { Courses } from '../../store/slices/courses.slice';

interface CourseData {
    data: Courses[]
}

export const ActiveCoursesList: FC<CourseData> = ({data}) => {
    
    return(
        <StyledCourses>
            <ScrollContainer>
                {
                    data.map(course => {
                        return <CourseListElement data={course} key={Math.random()}/>
                    })
                }
                {
                    data[0] && <p><button>WCZYTAJ WIĘCEJ</button></p> 
                }
                
            </ScrollContainer>
        </StyledCourses>
    );
};

const StyledCourses = styled.div`
    width: 100%;
    margin-left: 17%;
`;

const ScrollContainer = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    p {
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2%;

        button {
            font-weight: 800;
            font-size: 15px;
            line-height: 18px;
            text-align: center;
            text-decoration-line: underline;
            background: none;
            color: #00B1FF;
            border: none;
            cursor: pointer;
        }
    }
`;
