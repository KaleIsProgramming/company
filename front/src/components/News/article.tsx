import styled from "@emotion/styled";
import { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store";
import { Article, fetchArticles } from '../../store/slices';
import { ArrowBack } from '@mui/icons-material';

export const OpenedArticle = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticles());
    },[]);

    const { articleID } = useParams();

    const articles = useAppSelector(state => state.articlesSlice.articles);
    console.log(articles)
    const article: Article[] = articles.filter(article => article.id == parseInt(articleID!));
    
    return(
        <StyledArticleContainer>
        {
            articles[0] &&
            <>
                <HeaderContainer>
                    <HeaderLeftContainer>
                        <Link to='/aktualnosci'><ArrowBack /></Link>
                    </HeaderLeftContainer>
                    <HeaderRightContainer>
                        <h1>{article[0].nazwa}</h1>
                        <h3>{new Date(article[0].utworzono).getDate()}-{new Date(article[0].utworzono).getMonth() + 1}-{new Date(article[0].utworzono).getFullYear()}</h3>
                    </HeaderRightContainer>
                </HeaderContainer>
                <StyledImageContainer>
                    <img src={articles[0].zdjecie} alt="zdjecie" />
                </StyledImageContainer>
                <p>{article[0].tresc}</p>
            </>
        }
        </StyledArticleContainer>
    );
};



const HeaderContainer = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
`;

const HeaderLeftContainer = styled.div`
    width: 6%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        height: 2.5rem;
        width: 2.5rem;
        color: white;
        background: #00B1FF;
        margin-right: 1%;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const HeaderRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        color: #00B1FF;
    }
`;


const StyledArticleContainer = styled.div`
    height: 80%;
    width: 70%;
    overflow: auto;

    h1 {
        margin-bottom: 0.5%; 
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

    h3 {
        margin-bottom: 2%; 
        color:#A6A6A6;
    }
`;

const StyledImageContainer = styled.div`
    height: 40%;
    width: 30%;
    float: left;
    margin-right: 2%;
    margin-bottom: 1%; 

    img {
        height: 100%;
        width: 100%;
    }
`;

