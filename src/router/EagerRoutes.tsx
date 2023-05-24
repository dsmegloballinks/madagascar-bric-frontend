import RoutesReducer from "./RoutesReducer";

/* This code is using the `import.meta.glob()` method to eagerly load all the routes in the
`/src/screens` directory that have a `.jsx` or `.tsx` extension, except for those that have a
`.lazy.jsx` or `.lazy.tsx` extension. The `eager: true` option ensures that the routes are loaded
immediately, rather than being loaded lazily on demand. The resulting array of route modules is
assigned to the `EAGER_ROUTES` constant. */
const EAGER_ROUTES = import.meta.glob(
  ["/src/screens/**/*.(jsx|tsx)", "!/src/screens/**/*.lazy.(jsx|tsx)"],
  { eager: true }
);

export default RoutesReducer(EAGER_ROUTES, {});
