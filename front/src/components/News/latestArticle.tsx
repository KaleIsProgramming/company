import styled from "@emotion/styled";
import { useAppSelector } from "../../store";
import { Link } from "react-router-dom";

export const LatestArticle = () => {


    const articles = useAppSelector(state => state.articlesSlice.articles);
    const article = articles[articles.length - 1];


    return(
        <StyledLatestArticle>
            <h1>Najnowsza Aktualność</h1>
            { 
            article && 
            <Article>
                <LatestArticleLeftContainer>
                    <img src={article.zdjecie} alt="zdjecie" />
                </LatestArticleLeftContainer>
                <LatestArticleRightContainer>
                    <h2>{article.nazwa}</h2>
                    <p>{new Date(article.utworzono).getDate()}-{new Date(article.utworzono).getMonth() + 1}-{new Date(article.utworzono).getFullYear()}</p>
                    <h5>{article.tresc}</h5>
                    <Link to={`/aktualnosc/${article.id}`}>Czytaj Więcej</Link>
                </LatestArticleRightContainer>
            </Article>
            }
            <Line />
        </StyledLatestArticle>
    );
};

const StyledLatestArticle = styled.div`
    height: 45%;
    width: 100%;
    h1 {
        height: 15%;
        color: #00B1FF;
    }
`;

const Article = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
`;

const LatestArticleLeftContainer = styled.div`
    display: flex;
    align-items: center;
    width: 20%;

    img{
        height: 80%;
        max-width: 94%;
        border-radius: 20px;
    }
`;

const LatestArticleRightContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;

    h2 {
        height: 20%;
    }

    p{
        height: 20%;
        display: flex;
        align-items: center;
        color: #A6A6A6;
        font-size: 80%;
    }

    h5 {
        height: 30%;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 50%;
        color: #323232;
        font-size: 105%;
        white-space: nowrap;
    }

    a {
        height: 12%;
        width: 50%;
        display: flex;
        align-items: flex-end;
        color: #00AFFF;
        text-decoration: underline;
        
    }

    a:hover {
        scale: 1.05;
    }

`;

const Line = styled.div`
    height: 1px;
    width: 90%;
    background: #00AFFF;
    border-radius: 20px;
`;