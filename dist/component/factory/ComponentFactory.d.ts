import React from 'react';
type ComponentType = 'StyledH2' | 'StyledA' | 'StyledDiv';
interface ComponentFactoryProps {
    componentId: ComponentType;
}
export declare const ComponentFactory: React.FC<ComponentFactoryProps>;
export {};
