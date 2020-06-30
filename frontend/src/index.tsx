import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'Router';
import ErrorBoundary from 'components/ErrorBoundary';
import 'antd/dist/antd.css';

ReactDOM.render(
  <ErrorBoundary>
    <Router />
  </ErrorBoundary>,
  document.getElementById('root'),
);
