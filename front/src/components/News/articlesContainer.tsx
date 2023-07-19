import styled from "@emotion/styled";
import { useState } from 'react';
import { LatestArticle, ArticlesList } from './';
import SearchIcon from '@mui/icons-material/Search';

export const ArticlesContainer = () => {

    const [ isSearching, setIsSearching ] = useState(false);
    const [ lookingForPhrase, setLookingForPhrase ] = useState<string>('');

    const searchHandler = (e: any) => {
        setIsSearching(true);
        setLookingForPhrase(e.target.value);
    }
    

    return(
        <>
        {
            !isSearching ?
            <>  
                <SearchBarContainer>
                    <input type="text" placeholder="wyszukaj aktualności" onInput={(e) => searchHandler(e)} />
                    <SearchButton>
                        <SearchIcon />
                    </SearchButton>
                </SearchBarContainer>
                <StyledArticlesContainer>
                    <LatestArticle />
                    <ArticlesList items="" />
                </StyledArticlesContainer>
            </>
            :
            <>  
                <SearchBarContainer>
                    <input type="text" placeholder="wyszukaj aktualności" onInput={(e) => searchHandler(e)} />
                    <SearchButton>
                        <SearchIcon />
                    </SearchButton>
                </SearchBarContainer>
                <StyledArticlesContainer>
                    <ArticlesList items={lookingForPhrase} />
                </StyledArticlesContainer>
            </>
        }
        </>

    )
}

const SearchBarContainer = styled.div`
    height: 14%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        height: 40%;
        width: 20%;
        background: #FFFFFF;
        border: 3px solid #D8D8D8;
        border-right: none;
        box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        color: #A6A6A6;
        padding: 0 2%;
        
    }

    input:focus {
        outline: none;
    }   
`;

const SearchButton = styled.button`
    height: 40%;
    width: 5%;
    padding: 0 0.25%;
    background: white;
    border: 3px solid #D8D8D8;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 5px;
    color: #5f5f5f;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

const StyledArticlesContainer = styled.div`
    height: 95%;
    width: 70%;
    margin-bottom: 5%;
    overflow: auto;

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