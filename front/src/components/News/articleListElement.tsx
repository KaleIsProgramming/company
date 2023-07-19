import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FC } from 'react';
import { Article } from '../../store/slices';

interface ArticleData {
    data: Article;
}

export const ArticleListElement: FC<ArticleData> = ( {data} ) => {
    return(
        <StyledArticleListElement>
            <StyledArticle>
                <LeftImageContainer>
                    <img src={data.zdjecie} alt="image" />
                </LeftImageContainer>
                <RightContainer>
                    <h2>{data.nazwa}</h2>
                    <p>{new Date(data.utworzono).getDate()}-{new Date(data.utworzono).getMonth() + 1}-{new Date(data.utworzono).getFullYear()}</p>
                    <h5>{data.tresc}</h5>
                    <Link to={`/aktualnosc/${data.id}`}>Czytaj Więcej</Link>
                </RightContainer>
            </StyledArticle>
            <Line />
        </StyledArticleListElement>
    );
};

const StyledArticleListElement = styled.div`
    min-height: 60%;
    width: 100%;
`;

const StyledArticle = styled.div`
    min-height: 90%;
    display: flex;
`;

const LeftImageContainer = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    
    img {
        height: 80%;
        max-width: 98%;
        border-radius: 20px;
    }

`;

const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin-left: 1.2%;

    h2 {
        height: 15%;
    }

    p{
        height: 10%;
        display: flex;
        align-items: center;
        color: #A6A6A6;
        font-size: 80%;
        margin-bottom: 1%;
    }

    h5 {
        height: 40%;
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

`;

const Line = styled.div`
    height: 1px;
    width: 90%;
    background: #00AFFF;
    border-radius: 20px;
    margin: 1% 0;
`;