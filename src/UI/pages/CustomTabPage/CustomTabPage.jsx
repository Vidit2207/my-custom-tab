import React, { useEffect, useState } from "react";

import { Calendar, EmailLink, NeonDigitalClock } from "../../components";
import { EmailList } from "../../containers";

const CustomTabPage = () => {
  return (
    <section className="custom-tab">
      <section className="custom-tab__left custom-tab__column">
        <Calendar></Calendar>
        <EmailList></EmailList>
      </section>
      <section className="custom-tab__middle custom-tab__column">
        <div className="custom-tab__middle__top custom-tab__middle__row"></div>
        <div className="custom-tab__middle__bottom custom-tab__middle__row"></div>
      </section>
      <section className="custom-tab__right custom-tab__column">
        <NeonDigitalClock></NeonDigitalClock>
      </section>
    </section>
  );
};

export default CustomTabPage;
