import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
    width: 300px;
    height: 150px;
    background: ${props => props.background};
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 1000;
    padding: 15px;
`
const StyledCloseButton = styled.button`
    padding: 2px 5px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
    border: 2px solid indianred;
    border-radius: 50%;
    cursor: pointer;
    color: indianred;
    font-weight: bold;
`

const Modal = ({children, background, active, setActive}) => {
    return (
            <StyledModal background={background}>
                <StyledCloseButton onClick={() => {setActive(!active)}}>x</StyledCloseButton>
                {children}
            </StyledModal>
    );
};

export default Modal;