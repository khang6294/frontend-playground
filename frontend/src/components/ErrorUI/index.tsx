import React from 'react';
import { IErrorUIProps } from './interfaces';
import { ErrorContainer } from './style';

const ErrorDisplay: React.FC<IErrorUIProps> = ({ errorMessage, children }) => {
  return (
    <div>
      <ErrorContainer>
        <div>Error</div>
      </ErrorContainer>
    </div>
  );
};

export default React.memo(ErrorDisplay);
