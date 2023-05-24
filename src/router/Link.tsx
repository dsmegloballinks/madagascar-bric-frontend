import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { getMatchingRoute } from "./GetMatchingRoute";

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  prefetch?: boolean;
}

const Link = memo(({ to, prefetch = true, ...props }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [prefetched, setPrefetched] = useState(false);

  const route = useMemo(() => getMatchingRoute(to), [to]);
  /* `const preload` is a callback function that is created using the `useCallback` hook. It is used to
  prefetch the route associated with the link. When the function is called, it first checks if the
  `route` object exists (i.e. if there is a matching route for the link). If it does, it calls the
  `preload` method on the `route` object to prefetch the route. It then sets the `prefetched` state
  to `true` to indicate that the route has been prefetched. The `useCallback` hook is used to
  memoize the function and prevent unnecessary re-renders. */
  const preload = useCallback(() => {
    route?.preload();
    setPrefetched(true);
  }, [route]);

/* `prefetchable` is a boolean value that determines whether the route should be prefetched or not. It
is calculated using the `useMemo` hook, which memoizes the result of the function and only
recalculates it when the dependencies (`route` and `prefetched`) change. */
  const prefetchable = useMemo(
    () => Boolean(route && !prefetched),
    [route, prefetched]
  );

 /* This `useEffect` hook is setting up an `IntersectionObserver` to prefetch the route when the link
 is close to being visible on the screen. It is triggered when the `prefetchable`, `prefetch`,
 `ref`, or `preload` values change. If the link is prefetchable and prefetch is enabled, it creates
 a new `IntersectionObserver` with a root margin of 200px. When the link intersects with the root
 margin, it calls the `preload` function to prefetch the route and stops observing the link.
 Finally, it returns a cleanup function that disconnects the observer when the component unmounts. */
  useEffect(() => {
    if (!prefetchable || !prefetch || !ref?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          preload();
          observer.unobserve(ref.current!);
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, [prefetchable, prefetch, ref, preload]);

/* `handleMouseEnter` is a callback function that is created using the `useCallback` hook. It is
triggered when the user hovers over the link. If the link is prefetchable (i.e. the route has not
been prefetched yet), it calls the `preload` function to prefetch the route. The `useCallback` hook
is used to memoize the function and prevent unnecessary re-renders. */
  const handleMouseEnter = useCallback(() => {
    if (prefetchable) preload();
  }, [prefetchable, preload]);

  return (
    <RouterLink ref={ref} to={to} onMouseEnter={handleMouseEnter} {...props} />
  );
});

export default Link;
