import React from 'react';
import styled from "styled-components";

const StyledTitle = styled.h1`
    color: ${props => props.color};
    margin-top: 10px;
    padding-left: 1.5rem;
`

const Title = ({children, color}) => {
    return (
        <StyledTitle color={color}>
            {children}
        </StyledTitle>
    );
};

export default Title;