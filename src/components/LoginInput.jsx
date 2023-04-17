export default function LoginInput({ label, id, error, src, ...rest }) {
  return (
    <div className="login__container__form__input">
      <div className="login__container__form__input__field__wrapper">
        <img src={src} />
        <input
          className="login__container__form__input__field"
          id={id}
          name={id}
          {...rest}
        />
      </div>
      {error && (
        <div className="login__container__form__input__error">{error}</div>
      )}
    </div>
  );
}
