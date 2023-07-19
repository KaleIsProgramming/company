import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppSelector } from "../../store";
import styled from "@emotion/styled";
import { ArrowBack } from '@mui/icons-material';

export const Course = () => {

    const [ isProgramOpen , setIsProgramOpen ] = useState(false);
    const [ isPrelengenciOpen , setIsPrelengenciOpen ] = useState(false);
    const [ isRegulaminOpen , setIsRegulaminOpen ] = useState(false);
    const [ activePage , setActivePage ] = useState('INFORMACJE');
    const { courseID } = useParams()

    const courses = useAppSelector(state => state.coursesSlice.courses);
    const course = courses.filter(course => course.id == parseInt(courseID!));

    const date = new Date();
    const seconds = Math.floor(date.getTime() / 1000);
    const previousCourse = () => {
        if ((Math.floor(new Date(course[0].data).getTime() / 1000) - seconds) > 0) {
            return true;
        } else {
            return false;
        }
    }
    

    const ActivePageHandler = (newActivePage?: string) => {
        if (newActivePage) {
            setActivePage(newActivePage);
        }
        const listElements  = document.getElementsByClassName('navbar_element') as HTMLCollectionOf<HTMLUListElement>;

        for( let i = 0; i < listElements.length; i++ ) {
            if(listElements[i].textContent == activePage){
                listElements[i].style.color = "white";
            } else {
                listElements[i].style.color = "black";
            }
        }
    }

    ActivePageHandler();

    return(
        <StyledCourse>
            <CourseName><Link to='/szkolenia'><ArrowBack /></Link>Szkolenie: <UpperCaseSpan>{course[0].nazwa}</UpperCaseSpan></CourseName>
            <Line></Line>
            <SrollContainer>
                <h2>INFORMACJE OGÓLNE</h2>
                <h3>Koszt: <MarginLeftSpan>{course[0].cena}zł</MarginLeftSpan></h3>
                <h3>Czas i miejsce: <MarginLeftSpan>{new Date(course[0].data).getDate()}-{new Date(course[0].data).getMonth() + 1}-{new Date(course[0].data).getFullYear()}</MarginLeftSpan></h3>
                <h3>Koordynator szkolenia: <MarginLeftSpan>{course[0].koordynator}</MarginLeftSpan></h3>
                <h3>Kontakt mailowy z Quality Time: <MarginLeftSpan>{course[0].mail}</MarginLeftSpan></h3>
                { 
                isProgramOpen ? 
                    <OpenedContentContainer>
                        <OpenedTopContainer>
                            <OpenedLeftContentContainer>PROGRAM</OpenedLeftContentContainer>
                            <OpenedRightContentContainer><p onClick={() => setIsProgramOpen(!isProgramOpen)}>ZWIŃ</p></OpenedRightContentContainer>
                        </OpenedTopContainer>
                        <OpenedTextContainer>{course[0].opis}</OpenedTextContainer>
                    </OpenedContentContainer>
                :
                    <ContentContainer onClick={() => setIsProgramOpen(!isProgramOpen)}>
                        <LeftContentContainer><p>PROGRAM</p></LeftContentContainer>
                        <RightContentContainer><p >ROZWIŃ</p></RightContentContainer>
                    </ContentContainer>
                }
                {
                isPrelengenciOpen ?
                    <OpenedContentContainer>
                        <OpenedTopContainer>
                            <OpenedLeftContentContainer>PRELEGENCI</OpenedLeftContentContainer>
                            <OpenedRightContentContainer><p onClick={() => setIsPrelengenciOpen(!isPrelengenciOpen)}>ZWIŃ</p></OpenedRightContentContainer>
                        </OpenedTopContainer>
                        <OpenedTextContainer>{course[0].prelegenci}</OpenedTextContainer>
                    </OpenedContentContainer>
                :
                    <ContentContainer onClick={() => setIsPrelengenciOpen(!isPrelengenciOpen)}>
                        <LeftContentContainer><p>PRELEGENCI</p></LeftContentContainer>
                        <RightContentContainer><p>ROZWIŃ</p></RightContentContainer>
                    </ContentContainer>
                }
                {
                isRegulaminOpen ?
                    <OpenedContentContainer onClick={() => setIsRegulaminOpen(!isRegulaminOpen)}>
                        <OpenedTopContainer>
                            <OpenedLeftContentContainer>REGULAMIN</OpenedLeftContentContainer>
                            <OpenedRightContentContainer><p>ZWIŃ</p></OpenedRightContentContainer>
                        </OpenedTopContainer>
                        <OpenedTextContainer>{course[0].regulamin}</OpenedTextContainer>
                    </OpenedContentContainer>
                :
                    <ContentContainer onClick={() => setIsRegulaminOpen(!isRegulaminOpen)}>
                        <LeftContentContainer><p>REGULAMIN</p></LeftContentContainer>
                        <RightContentContainer><p>ROZWIŃ</p></RightContentContainer>
                    </ContentContainer>
                }
            </SrollContainer>
            { previousCourse() &&
                <ButtonContainer>
                    <Link to='/formularz-zgloszeniowy'><button>ZGŁOŚ UDZIAŁ</button></Link>
                </ButtonContainer> 
            }
        </StyledCourse>
    );
};

const OpenedTopContainer = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
`;

const OpenedContentContainer = styled.div`
    height: 80%;
    width: 90%;
    padding: 1.5% 1.5%;
    margin: 1% 1%;
    box-shadow: 1px 1px 10px 4px rgba(0, 0, 0, 0.25);
`;

const OpenedLeftContentContainer = styled.h2`
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    margin-left: 2%;
    border-bottom: 2px solid #00B1FF;
`;

const OpenedRightContentContainer = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    text-decoration-line: underline;
    color: #00B1FF;
    font-size: 90%;
    margin-right: 5%;
    font-weight: 800;

    p{
        cursor: pointer
    }
`;

const OpenedTextContainer = styled.div`
    height: 80%;
    width: 100%;
    margin-left: 1%;
    margin-top: 2%;
`;

const StyledCourse = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const CourseName = styled.h1`
    height: 10%;
    width: 90%;
    margin-left: 3%;
    display: flex;
    align-items: center;
    color: #00B1FF;

    a {
        height: 2rem;
        width: 2rem;
        color: white;
        background: #00B1FF;
        margin-right: 1%;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const UpperCaseSpan = styled.span`
    text-transform: uppercase;
    margin-left: 1%;
`;

const MarginLeftSpan = styled.span`
    margin-left: 0.5%;
    color: #00B1FF;
`;

const SrollContainer = styled.div`
    height: 70%;
    width: 80%;
    margin-top: 1%;
    margin-left: 3%;

    overflow-y: auto;
    overflow-x: hidden;

    h3 {
        margin: 2% 1%;
    }

    h2 {
        margin: 0 1%;
    }

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
    }
`;

const Line = styled.div`
    height: 2px;
    width: 73%;
    background: #00AFFF;
    margin-left: 3%;
`;

const ContentContainer = styled.div`
    height: 15%;
    width: 90%;
    padding: 1.5% 1.5%;
    margin: 1% 1%;
    display: flex;
    box-shadow: 1px 1px 10px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

const LeftContentContainer = styled.h2`
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    margin-left: 2%;
`;

const RightContentContainer = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    text-decoration-line: underline;
    color: #00B1FF;
    font-size: 90%;
    margin-right: 5%;
    font-weight: 800;
`;

const ButtonContainer = styled.div`
    height: 10%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3%;
    
    a {
        height: 65%;
        width: 11%;
        button {
            background: #00AFFF;
            border: 2px solid #00AFFF;
            color: white;
            cursor: pointer;
            height: 100%;
            width: 100%;
        }
    }
`;