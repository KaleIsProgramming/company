import styled from "@emotion/styled";
import { Course } from "../../components/Courses";

export const CoursePage = () => {

    return ( 
        <StyledCoursePage>
            <Course></Course>
        </StyledCoursePage>
    );
};

const StyledCoursePage = styled.div`
    height: 100%;
    width: 100%;
`;