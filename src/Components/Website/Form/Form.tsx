import React, {ReactNode} from 'react';

export const Form: React.FC<{children: ReactNode}> = ({children}) => {
	return <form>{children}</form>;
};
