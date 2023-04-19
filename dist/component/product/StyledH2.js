import React from "react";
import styled from "styled-components";
const H2 = styled.h2 `
  color: red;
`;
export const StyledH2 = () => {
    return React.createElement(H2, null, "This is StyledH2");
};
