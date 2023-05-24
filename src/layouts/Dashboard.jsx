import { Header, Sidebar } from "components";
import { useEffect, useState } from "react";

// import Loading from "./loading";
import { Outlet } from "react-router-dom";
// import { SuspenseAfterInitialRender } from "router";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  /**
   * The function toggles the state of the sidebar based on the width of the window.
   */
  function toggleSidebar() {
    if (window.innerWidth <= 820) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it is
 used to add an event listener to the window object for the "resize" event and call the
 `toggleSidebar` function when the event is triggered. The empty array `[]` as the second argument
 to `useEffect` means that the effect will only run once, when the component mounts. */
  useEffect(() => {
    toggleSidebar();
    window.addEventListener("resize", toggleSidebar);
  }, []);
  return (
    <div className="container">
      {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
      <div className="container__main">
        {/* <Header setSidebarOpen={setSidebarOpen} /> */}
        <div className="container__main__content">
          {/* <SuspenseAfterInitialRender fallback={<Loading dashboard={true} />}> */}
          <Outlet />
          {/* </SuspenseAfterInitialRender> */}
        </div>
      </div>
    </div>
  );
}
