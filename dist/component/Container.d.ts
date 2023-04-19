import React from "react";
type ComponentType = 'StyledH2' | 'StyledA' | 'StyledDiv';
type Props = {
    data: {
        id: string;
        componentId: ComponentType;
        dynamicData: string;
    };
};
export declare const Container: React.FC<Props>;
export {};
