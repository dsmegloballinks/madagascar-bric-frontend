import lazyRoutes from "./LazyRoutes";

/**
 * This function finds a matching route in a list of lazy routes based on a given path.
 * @param {string} path - The `path` parameter is a string representing the URL path that needs to be
 * matched with a route.
 */
export const getMatchingRoute = (path: string) =>
  lazyRoutes.find((route) => {
    const regex = new RegExp(route.path.replace(/:\w+|\*/g, ".*"));
    return regex.test(path);
  });
