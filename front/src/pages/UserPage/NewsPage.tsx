import styled from "@emotion/styled";
import { useEffect } from 'react';
import { ArticlesContainer } from '../../components/News';
import { useAppDispatch } from "../../store";
import { fetchArticles } from "../../store/slices";


export const NewsPage = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticles());
    },[]);

    return(
        <StyledNewsPage>
            <ArticlesContainer />
        </StyledNewsPage>
    );
};

const StyledNewsPage = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;