import Head from "@router/Head";
import Outlet from "@router/Outlet";
import { useAtom } from "jotai";
// import { userAtom } from "global";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userAtom } from "../global";

export default function App() {
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      user === null &&
      location.pathname.toLowerCase().includes("/dashboard")
    ) {
      navigate("/", { replace: true });
    }
    if (user !== null && location.pathname.toLowerCase() === "/") {
      navigate("/dashboard", { replace: true });
    }
  }, [location]);

  return (
    <>
      <Head
        title="Remixer"
        image="/favicon.svg"
        url="https://vitefilerouter.com"
        description="Remixer"
      />
      {/* {!location.pathname.toLowerCase().includes("/dashboard") ? (
        <Outlet />
      ) : (
        <Dashboard />
      )} */}
      <Outlet />
    </>
  );
}
