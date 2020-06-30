// Figures out the component to render based on the current window.location.pathname.
// Depends on popState, and should not need a refresh to navigate as long as the Anchor component is used for internal navigation.
// Allows opening the bots from any view rendered.

import { AxiosError } from 'axios';
import React, { useState, lazy, Suspense, useEffect } from 'react';
import { ErrorContext } from 'helpers/contexts';
import ErrorUI from 'components/ErrorUI';
import { displayErrorNotification } from 'helpers/services/notifications';
import { IRoute } from 'helpers/interfaces';
import { routeReplace, activeRouteFromPath, variablesFromRoute } from 'helpers/route-utils';
import GlobalStyles from 'assets/styles/GlobalStyles';

// Least specific should be last to prevent overwriting all others
const ROUTES = [
  {
    path: '/main',
    view: lazy(() => import('views/Main')),
  },
  {
    path: '/',
    redirect: '/main',
  },
];

const Router: React.FC = () => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [activeRoute, setActiveRoute] = useState<IRoute>();
  const [variables, setVariables] = useState<{ [key: string]: string }>();

  const handleNavigation = () => {
    const activeRoute = activeRouteFromPath(ROUTES);

    if (!activeRoute) {
      setHasError(true);
      return;
    }

    const variables = variablesFromRoute(activeRoute);
    setVariables(variables);
    setActiveRoute(activeRoute);
  };

  useEffect(() => {
    window.addEventListener('popstate', handleNavigation);
    handleNavigation();

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const onHandlingError = (error: AxiosError) => {
    // Network Error handling. status code 500
    if (error.message === 'Network Error' && !error.response) {
      setHasError(true);
    }
    if (error.response) {
      const { status, data } = error.response;
      if (status === 403) {
        return displayErrorNotification(data.detail);
      }
      if (status === 400) {
        return displayErrorNotification('Error, please check your input.');
      }
      if (status === 404) {
        return displayErrorNotification('Resource not found!');
      }
    }
  };

  if (hasError || !activeRoute) {
    return (
      <div>
        <ErrorUI errorMessage='Error.' />
      </div>
    );
  }

  if ('redirect' in activeRoute) {
    routeReplace(activeRoute.redirect);
    return <></>;
  }

  return (
    <ErrorContext.Provider value={{ onHandlingError }}>
      <Suspense fallback={'...Loading'}>
        <activeRoute.view {...variables} route={activeRoute} />
      </Suspense>
      <GlobalStyles />
    </ErrorContext.Provider>
  );
};

export default Router;
