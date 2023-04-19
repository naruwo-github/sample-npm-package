import React from 'react';
import styled from 'styled-components';
const A = styled.a `
  color: green;
`;
export const StyledA = () => {
    return React.createElement(A, null, "This is StyledA");
};
