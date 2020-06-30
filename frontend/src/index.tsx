import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'Router';
import ErrorBoundary from 'components/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <Router />
  </ErrorBoundary>,
  document.getElementById('root'),
);
