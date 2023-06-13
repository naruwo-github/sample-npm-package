import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { ComponentFactory } from "./factory/ComponentFactory";
export const Container = ({ data }) => {
    return (_jsxs(React.Fragment, { children: [_jsxs("div", { style: { background: 'lightgray' }, children: [_jsx("h2", { children: "Container" }), _jsxs("ul", { children: [_jsxs("li", { children: ["id: ", data.id] }), _jsxs("li", { children: ["componentId: ", data.componentId] }), _jsxs("li", { children: ["dynamicData: ", data.dynamicData] })] })] }), _jsx(ComponentFactory, { componentId: data.componentId })] }));
};
//# sourceMappingURL=Container.js.map