import React from "react";
import { ComponentFactory } from "./factory/ComponentFactory";
export const Container = ({ data }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { background: 'lightgray' } },
            React.createElement("h2", null, "Container"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "id: ",
                    data.id),
                React.createElement("li", null,
                    "componentId: ",
                    data.componentId),
                React.createElement("li", null,
                    "dynamicData: ",
                    data.dynamicData))),
        React.createElement(ComponentFactory, { componentId: data.componentId })));
};
