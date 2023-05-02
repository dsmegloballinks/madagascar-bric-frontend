import Head from "@router/Head";
import Outlet from "@router/Outlet";
import { useAtom } from "jotai";
// import { userAtom } from "global";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userAtom } from "../global";
import { LoadScript } from "@react-google-maps/api";

export default function App() {
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null && location.pathname.toLowerCase().includes("/dashboard")) {
      navigate("/", { replace: true });
    }
    if (user !== null && location.pathname.toLowerCase() === "/") {
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
