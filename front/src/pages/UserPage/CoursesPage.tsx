import styled from "@emotion/styled";
import { CoursesComponent } from '../../components/Courses'

export const CoursesPage = () => {

    return(
        <StyledCoursesPage>
            <CoursesComponent />
        </StyledCoursesPage>
    );
};

const StyledCoursesPage = styled.div`
    height: 100%;
    width: 100%;
`;