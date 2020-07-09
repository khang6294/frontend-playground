import React from 'react';

interface IBaseRoute {
  path: string;
}

interface IRenderableRoute extends IBaseRoute {
  view: React.LazyExoticComponent<any>;
}

interface IRedirectRoute extends IBaseRoute {
  redirect: string;
}

export type IRoute = IRenderableRoute | IRedirectRoute;
