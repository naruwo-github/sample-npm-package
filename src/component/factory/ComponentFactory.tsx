import React from 'react';
import { StyledH2 } from '../product/StyledH2';
import { StyledA } from '../product/StyledA';
import { StyledDiv } from '../product/StyledDiv';

type ComponentType = 'StyledH2' | 'StyledA' | 'StyledDiv';

interface ComponentFactoryProps {
	componentId: ComponentType;
}

export const ComponentFactory: React.FC<ComponentFactoryProps> = ({ componentId }) => {
	switch (componentId) {
		case 'StyledH2':
			return <StyledH2 />;
		case 'StyledA':
			return <StyledA />;
		case 'StyledDiv':
			return <StyledDiv />;
		default:
			return null;
	}
}