import styled from "@emotion/styled";
import { Heading, Menu } from './';

type BoxProps = {
    children: React.ReactNode;
}

export const NavContainer = (props: BoxProps) => {

    return(
        <StyledNavContainer>
            <Menu />
            <RightContainer>
                <Heading />
                <PropsContainer>
                    {props.children}
                </PropsContainer>
            </RightContainer>
        </StyledNavContainer>
    );
};

const StyledNavContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden
`;

const RightContainer = styled.div`
    height: 100vh;
    width: 87vw;
`;

const PropsContainer = styled.div`
    height: 82%;
    width: 100%;
`;