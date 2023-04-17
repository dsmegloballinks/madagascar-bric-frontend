import { loginBg, logo, contact, lock } from "@assets";
import LoginInput from "@components/LoginInput";
import { ArrowRight } from "react-feather";
import { useNavigate } from "react-router-dom";
// import { logo } from "src/assets";

export default function Index() {
  const navigate = useNavigate();
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
            Madagascar <br /> Birth Registeration{" "}
          </div>
          <div className="login__container__content__text">
            Get the process started in less than 10 minutes. Let us handle the
            rest.
          </div>
          <LoginInput
            src={contact}
            placeholder="Username / Email"
            type="text"
          />
          <LoginInput src={lock} placeholder="Password" type="Password" />
          <div className="login__container__content__bottom__text">
            Forgot your password?
          </div>
          <div className="login__button__container">
            <div
              className="login__button"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <div className="login__button__text">Login</div>
              <ArrowRight size={30} className="login__button__icon" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
