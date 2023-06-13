import { jsx as _jsx } from "react/jsx-runtime";
import { StyledH2 } from '../product/StyledH2';
import { StyledA } from '../product/StyledA';
import { StyledDiv } from '../product/StyledDiv';
export const ComponentFactory = ({ componentId }) => {
    switch (componentId) {
        case 'StyledH2':
            return _jsx(StyledH2, {});
        case 'StyledA':
            return _jsx(StyledA, {});
        case 'StyledDiv':
            return _jsx(StyledDiv, {});
        default:
            return null;
    }
};
//# sourceMappingURL=ComponentFactory.js.map