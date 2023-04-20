import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Step from "./Step";

export default function RegistrationStatuses({ activeStep }) {
  useEffect(() => {
    console.log("activeStep", activeStep);
  }, [activeStep]);
  return (
    <div className="order__details__steps">
      <ScrollContainer className="order__details__steps__content">
        <Step
          label="Reporting Information"
          active={activeStep >= 0}
          nextActive={activeStep >= 1}
          step={1}
        />
        <Step
          label="Information About Child"
          active={activeStep >= 1}
          nextActive={activeStep >= 2}
          step={2}
        />
        <Step
          label="Information About Mother"
          active={activeStep >= 2}
          nextActive={activeStep >= 3}
          step={3}
        />
        <Step
          label="Information About Father"
          active={activeStep >= 3}
          nextActive={activeStep >= 4}
          step={4}
        />
        <Step
          label="Information About Declarant"
          active={activeStep >= 4}
          nextActive={activeStep >= 5}
          step={5}
        />
        <Step
          label="Certificates"
          active={activeStep >= 5}
          nextActive={activeStep >= 6}
          step={6}
        />
      </ScrollContainer>
      {/* <div onClick={() => setActiveStep(activeStep + 1)}>next</div> */}
    </div>
  );
}
