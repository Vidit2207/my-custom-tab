import React from "react";

import { Calendar, NeonDigitalClock } from "../../components";

const CustomTabPage = () => {
  return (
    <section className="custom-tab">
      <section className="custom-tab__left custom-tab__column">
        {" "}
        <Calendar></Calendar>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </section>
      <section className="custom-tab__middle custom-tab__column"></section>
      <section className="custom-tab__right custom-tab__column">
        <NeonDigitalClock></NeonDigitalClock>
      </section>
    </section>
  );
};

export default CustomTabPage;
