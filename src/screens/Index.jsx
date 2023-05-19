import { loginBg, logo, contact, lock } from "@assets";
import LoginInput from "@components/LoginInput";
import { useState, useContext, useEffect } from "react";
import { ArrowRight, Loader } from "react-feather";
import { useNavigate } from "react-router-dom";
import { isNullOrEmpty } from "../utils/isNullOrEmpty";
import { loginCall } from "../apis/Repo";
import { PopupContext } from "../context/PopupContext";
// import { logo } from "src/assets";
import { useAtom } from "jotai";
import { userAtom } from "../global";

export default function Index() {
  const [, setUser] = useAtom(userAtom);
  const { setAlertPopupVisibility, setAlertPopupMessage, setIsSidebarHovered } =
    useContext(PopupContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passowrdErrorMessage, setPasswordErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if 'id' exists in local storage
    // If it exists, redirect to the dashboard page
    // Replace the current URL in the browser history
    // Commented out for now
    // let id = localStorage.getItem("id");
    // if (id) navigate("/dashboard", { replace: true });
  }, []);

  const isViewValid = () => {
    // Check if the email is null or empty
    // If true, set the email error message
    if (isNullOrEmpty(email)) setEmailErrorMessage("Enter Email");
    // Check if the password is null or empty
    // If true, set the password error message
    else if (isNullOrEmpty(passowrd)) setPasswordErrorMessage("Enter Password");
    else return true;
    return false;
  };

  const login = () => {
    if (isViewValid()) {
      let object = {
        user_name: email,
        password: passowrd,
      };
      setIsLoading(true);
      // Make a login API call with the provided object
      loginCall(object)
        .then(({ data }) => {
          setIsLoading(false);
          if (data.data.success) {
            // Construct the user object with the returned user_id
            let user = {
              id: data.data.result.user_id,
            };
            // Set the user object in the state
            setUser(user);
            // Store the user_id in local storage
            localStorage.setItem("id", data.data.result.user_id);
            // Store the isAdmin flag in local storage
            localStorage.setItem(
              "isAdmin",
              data.data.result.is_user_admin == 1 ? true : false
            );

            // Split the user_name by dot and store the first part in local storage
            const name = data.data.result.user_name.split(".");
            localStorage.setItem("user_name", name[0]);

            // Reset the sidebar hover state
            setIsSidebarHovered(false);

            // Check if the user is an admin
            // If true, redirect to the user management dashboard
            // Replace the current URL in the browser history
            // Otherwise, redirect to the regular dashboard
            // Replace the current URL in the browser history
            if (data.data.result.is_user_admin == 1)
              navigate("/dashboard/user-management", { replace: true });
            else navigate("/dashboard", { replace: true });
          } else {
            // Set the alert popup message with the error message returned from the API
            setAlertPopupMessage(data.data.message);
            // Display the alert popup
            setAlertPopupVisibility(true);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          console.log("err", err);
          // Set a generic error message for the alert popup
          setAlertPopupMessage("Some error occurred, please try later");
          // Display the alert popup
          setAlertPopupVisibility(true);
        });
    }
  };

  return (
    <div className="login__container__wrapper">
      <div className="login__container">
        <div className="login__container__img">
          <img src={loginBg} />
        </div>
        <form className="login__container__form">
          <div className="login__container__content">Let's sign in</div>
          <img className="login__container__logo" src={logo} />
          <div className="login__container__content__heading">
            Madagascar <br /> Birth Registration{" "}
          </div>
          <div className="login__container__content__text">
            Get the process started in less than 10 minutes. Let us handle the
            rest.
          </div>
          <LoginInput
            src={contact}
            placeholder="Username / Email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
              setEmailErrorMessage("");
            }}
            error={emailErrorMessage}
          />
          <LoginInput
            src={lock}
            placeholder="Password"
            type="Password"
            value={passowrd}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
              setPasswordErrorMessage("");
            }}
            error={passowrdErrorMessage}
          />
          <div className="login__container__content__bottom__text">
            Forgot your password?
          </div>
          <div className="login__button__container">
            <div
              className="login__button"
              onClick={() => {
                // Check if isLoading is false before calling the login function
                if (!isLoading) login();
              }}
            >
              <div className="login__button__text">
                {isLoading ? "Processing..." : "Login"}
              </div>
              {isLoading ? (
                <Loader size={30} className="login__button__icon" />
              ) : (
                <ArrowRight size={30} className="login__button__icon" />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
