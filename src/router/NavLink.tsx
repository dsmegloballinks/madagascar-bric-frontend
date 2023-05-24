import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { getMatchingRoute } from "./GetMatchingRoute";

interface NavLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  prefetch?: boolean;
}

const NavLink = memo(({ to, prefetch = true, ...props }: NavLinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [prefetched, setPrefetched] = useState(false);

  const route = useMemo(() => getMatchingRoute(to), [to]);
/* `const preload` is a memoized callback function that calls the `preload` method of the `route`
object (if it exists) and sets the `prefetched` state to `true`. The `useCallback` hook is used to
memoize the function so that it is only recreated when the `route` dependency changes. This helps to
optimize performance by avoiding unnecessary re-renders of the component. The `preload` function is
used to prefetch the data for the linked page when the link is close to being visible on the screen. */
  const preload = useCallback(
    () => route?.preload() && setPrefetched(true),
    [route]
  );

  /* `const prefetchable` is a boolean value that determines whether the data for the linked page can
  be prefetched or not. It is calculated using the `useMemo` hook, which memoizes the result of the
  function passed as the first argument and only recomputes it when the dependencies in the second
  argument change. */
  const prefetchable = useMemo(
    () => Boolean(route && !prefetched),
    [route, prefetched]
  );

/* This is a `useEffect` hook that sets up an `IntersectionObserver` to prefetch data for the linked
page when the link is close to being visible on the screen. It checks if `prefetchable` is true
(meaning that the data for the linked page has not been prefetched yet), if `prefetch` is true
(meaning that prefetching is enabled), and if `ref.current` is not null (meaning that the
`RouterLink` component has been mounted). If these conditions are met, it creates a new
`IntersectionObserver` that watches for the `ref.current` element to intersect with the viewport.
When the element is intersecting, it calls the `preload` function to prefetch the data for the
linked page and then stops observing the element. The `rootMargin` option is set to "200px" to start
prefetching the data when the link is 200 pixels away from the viewport. Finally, the `useEffect`
hook returns a cleanup function that disconnects the `IntersectionObserver` when the component is
unmounted. */
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

/* `handleMouseEnter` is a callback function that is created using the `useCallback` hook. It checks if
the `prefetchable` flag is true and if so, it calls the `preload` function. This function is used as
an event handler for the `onMouseEnter` event of the `RouterLink` component. When the user hovers
over the link, this function is called and if the `prefetchable` flag is true, it triggers the
`preload` function to prefetch the data for the linked page. This helps to improve the performance
of the application by loading the data in advance, so that it is available when the user navigates
to the linked page. */
  const handleMouseEnter = useCallback(() => {
    if (prefetchable) preload();
  }, [prefetchable, preload]);

  return (
    <RouterLink ref={ref} to={to} onMouseEnter={handleMouseEnter} {...props} />
  );
});

export default NavLink;
