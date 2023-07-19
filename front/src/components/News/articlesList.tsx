import styled from "@emotion/styled";
import { FC } from 'react';
import { ArticleListElement } from "./";
import { useAppSelector } from "../../store";

interface ArticleListData {
    items: string;
}

export const ArticlesList: FC<ArticleListData> = (items) => {


    const articles = useAppSelector(state => state.articlesSlice.articles);
    const searchedArticles = articles.filter(item => item.nazwa.includes(items.items) || item.tresc.includes(items.items))
    
    

    return(
        <>
            { items.items === "" ?
                <StyledArticlesList>
                <h1>Wcześniejsze Aktualności</h1>
                    {
                        articles.map(article => {
                            return <ArticleListElement data={article} key={Math.random()} />
                        })
                    }
                </StyledArticlesList>
                :
                <StyledSearchedArticlesList>
                <h1>Szukane Aktualności</h1>
                    {
                        searchedArticles.map(article => {
                            return <ArticleListElement data={article} key={Math.random()} />
                        })
                    }
                </StyledSearchedArticlesList>
            }
        </>

    );
};

const StyledArticlesList = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;

    h1 {
        min-height: 20%;
        color: #363636;
    }
`;

const StyledSearchedArticlesList = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;

    h1 {
        min-height: 20%;
        color: #363636;
    }
`;