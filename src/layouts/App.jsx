import Head from "@router/Head";
import Outlet from "@router/Outlet";
import { useAtom } from "jotai";
// import { userAtom } from "global";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userAtom } from "../global";
import { LoadScript } from "@react-google-maps/api";
import "../../src/i18n";

export default function App() {
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();

  /* This is a React hook called `useEffect` that is used to perform side effects in a functional
  component. In this case, it is checking if there is an `id` value stored in the `localStorage` and
  if the current `location.pathname` matches certain conditions. If the conditions are met, it uses
  the `navigate` function from `react-router-dom` to redirect the user to a different page. The
  `useEffect` hook is also dependent on the `location` variable, so it will re-run whenever the
  `location` changes. */
  useEffect(() => {
    let id = localStorage.getItem("id");
    if (id === null && location.pathname.toLowerCase().includes("/dashboard")) {
      navigate("/", { replace: true });
    }
    if (id !== null && location.pathname.toLowerCase() === "/") {
      navigate("/dashboard", { replace: true });
    }
  }, [location]);

  return (
    <>
      <Head
        title="Madagascar Birth Registration"
        image="/favicon.svg"
        url="https://vitefilerouter.com"
        description="Madagascar Birth Registration"
      />
      {/* {!location.pathname.toLowerCase().includes("/dashboard") ? (
        <Outlet />
      ) : (
        <Dashboard />
      )} */}
      <LoadScript
        id="google-map-script-loader"
        googleMapsApiKey={"AIzaSyBch80KN8P7agyjoq_R92ApjKohp-1txiQ"}
        libraries={["places"]}
        loadingElement={<></>}
      >
        <Outlet />
      </LoadScript>
    </>
  );
}
