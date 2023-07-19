import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCourses } from '../../store/slices';
import { ActiveCoursesList, NotActiveCoursesList } from './';

export const CoursesComponent = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.coursesSlice.courses);
    const date = new Date();
    const seconds = Math.floor(date.getTime() / 1000);
    const previousCourses = data.filter(course => (Math.floor(new Date(course.data).getTime() / 1000) - seconds) < 0);
    const activeCourses = data.filter(course => (Math.floor(new Date(course.data).getTime() / 1000) - seconds) > 0);


    useEffect(() => {
        dispatch(fetchCourses());
    }, []);

    return(
        <StyledCoursesComponent>
            <ScrollContainer>
                <HeadingComponent>
                    <h1>Zbliżające się szkolenia</h1>
                </HeadingComponent>
                <ActiveCoursesList data={activeCourses}/>
                
                <HeadingComponent>
                    <h1>Poprzednie szkolenia</h1>
                </HeadingComponent>   
                <NotActiveCoursesList data={previousCourses}/>
                
            </ScrollContainer>
        </StyledCoursesComponent>
    );
};


const StyledCoursesComponent = styled.div`
    height: 100%;
    width: 100%;
`;

const ScrollContainer = styled.div` 
    height: 100%;
    width: 80%;
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

const HeadingComponent = styled.div`
    height: 10%;
    width: 100%;
    margin-left: 17%;

    h1 {
        margin: 2% 0 2% 2%;
    }
    
`;