import React from 'react';
import styled from 'styled-components';
const Div = styled.div `
  color: blue;
`;
export const StyledDiv = () => {
    return React.createElement(Div, null, "This is StyledDiv");
};
