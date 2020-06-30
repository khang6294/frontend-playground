import { IRoute } from 'helpers/interfaces';

const dispatchPopEvent = () => {
  const popStateEvent = new PopStateEvent('popstate');
  dispatchEvent(popStateEvent);
};

const currentPathParts = () => {
  const path = window.location.pathname;
  return path.split('/').filter(Boolean);
};

export const routeReplace = (location: string) => {
  window.history.replaceState(undefined, '', location);
  dispatchPopEvent();
};

export const routePush = (location: string) => {
  window.history.pushState(undefined, '', location);
  dispatchPopEvent();
};

// Takes a Route and returns an object of variables coming from the current URL.
// Variables are prefixed with : in the passed route.path.
export const variablesFromRoute = (route: IRoute): { [key: string]: string } => {
  const routeParts = route.path.split('/').filter(Boolean);
  const pathParts = currentPathParts();

  return routeParts.reduce((accumulator: { [key: string]: string }, routePart, index) => {
    const isVariable = routePart[0] === ':';
    if (!isVariable) return accumulator;

    const variableName = routePart.slice(1, routePart.length);
    accumulator[variableName] = pathParts[index];
    return accumulator;
  }, {});
};

// Takes a list of routes and returns the one that's active based on window.location.pathname or undefined if non matches.
export const activeRouteFromPath = (routes: IRoute[]): IRoute | undefined => {
  const pathParts = currentPathParts();

  return routes.find((route) => {
    const routeParts = route.path.split('/').filter(Boolean);

    return routeParts.every((routePart, index) => {
      const isVariable = routePart[0] === ':';
      if (isVariable && pathParts[index]) return true;

      return pathParts[index] === routePart;
    });
  });
};
