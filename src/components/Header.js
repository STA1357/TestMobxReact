import React from 'react';
import styled from 'styled-components';
import ModalButton from "./ModalButton";

const StyledHeader = styled.div`
    background: ${props => props.background};
    position: fixed;
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
`

const Header = ({background}) => {
    return (
            <StyledHeader background={background}>
                <ModalButton
                    color={"white"}
                    background={"indianred"}>
                    Open Modal
                </ModalButton>
            </StyledHeader>
    );
};

export default Header;