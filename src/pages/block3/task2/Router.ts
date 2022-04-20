export interface RouteParams {
  [param: string]: string;
}

interface Route {
  path: string;
  component: (params?: RouteParams) => string;
}

export class Router {
  private routes: Route[];
  private initialRoute: string;

  constructor(initialRoute: string, routes: Route[]) {
    this.routes = routes;
    this.initialRoute = initialRoute;
  }

  private matchRoute(segments: string[]) {
    const params: RouteParams = {};

    const matchedRoute = this.routes.find((route) => {
      const pathSegments = route.path.split("/");

      return pathSegments.length == segments.length
        ? pathSegments.every((pathSegment, index) => {
            if (pathSegment[0] == ":") {
              params[pathSegment.slice(1)] = segments[index];

              return true;
            }

            return pathSegment === segments[index];
          })
        : false;
    });

    return { matchedRoute, params };
  }

  loadRoute(path: string) {
    const router = document.querySelector("#router") as HTMLDivElement;

    window.history.pushState({}, "", window.location.origin + path);

    const pathSegments = path.split("/");
    const { matchedRoute, params } = this.matchRoute(pathSegments);

    router.innerHTML = matchedRoute
      ? matchedRoute.component(params)
      : `<h1>Page not found</h1>`;
  }

  render() {
    const router = document.createElement("div");

    router.id = "router";

    this.loadRoute(this.initialRoute);

    return router;
  }
}
