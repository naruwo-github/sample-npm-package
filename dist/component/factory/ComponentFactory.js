import React from 'react';
import { StyledH2 } from '../product/StyledH2';
import { StyledA } from '../product/StyledA';
import { StyledDiv } from '../product/StyledDiv';
export const ComponentFactory = ({ componentId }) => {
    switch (componentId) {
        case 'StyledH2':
            return React.createElement(StyledH2, null);
        case 'StyledA':
            return React.createElement(StyledA, null);
        case 'StyledDiv':
            return React.createElement(StyledDiv, null);
        default:
            return null;
    }
};
