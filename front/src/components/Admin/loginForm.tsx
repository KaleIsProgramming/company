import styled from '@emotion/styled';
import { useAppDispatch } from '../../store';

export const LoginForm = () => {

    const dispatch = useAppDispatch();

    const loginHandler = () => {
        const data = document.getElementsByClassName('data') as HTMLCollectionOf<HTMLInputElement>;

        const login = data[0].value;
        const password = data[1].value;

    }

    return(
        <StyledLoginForm>
            <p>Login:</p>
            <input className='data' type="text" />
            <p>Hasło:</p>
            <input className='data' type="password" />
            <button onClick={() => loginHandler()}>Login</button>
        </StyledLoginForm>
    );
};

const StyledLoginForm = styled.div`
    height: 70vh;
    width: 50vw;
    background: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;