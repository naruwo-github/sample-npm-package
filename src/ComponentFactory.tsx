import React from 'react';

type ComponentType = 'StyledH2' | 'StyledA' | 'StyledDiv';

interface ComponentFactoryProps {
	componentId: ComponentType;
}

export const ComponentFactory: React.FC<ComponentFactoryProps> = ({ componentId }) => {
	switch (componentId) {
		case 'StyledH2':
			return <h2>h2</h2>;
		case 'StyledA':
			return <a>a</a>;
		case 'StyledDiv':
			return <div>div</div>;
		default:
			return null;
	}
}