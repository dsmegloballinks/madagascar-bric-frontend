import clsx from "clsx";

export default function Step({ active, nextActive, label, step }) {
  return (
    <div className="order__details__steps__content__step">
      <div
        className={clsx(
          "order__details__steps__content__step__icon",
          active && "order__details__steps__content__step__icon__active"
        )}
      >
        {step}
      </div>
      <div
        className={clsx(
          "order__details__steps__content__step__line",
          nextActive && "order__details__steps__content__step__line__active"
        )}
      />
      <div
        className={clsx(
          "order__details__steps__content__step__label",
          active && "order__details__steps__content__step__label__active"
        )}
      >
        {label}
      </div>
      {/* <div className="order__details__steps__content__step__details">
        <span>Date</span>
        22/02/2021
      </div> */}
    </div>
  );
}
