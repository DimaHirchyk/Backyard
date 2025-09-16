import { Fragment } from "react";
import Hero from "../components/hero/hero";
import WhatIsBackyard from "../components/what is backyard/whatIsBackyard";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <WhatIsBackyard />
    </Fragment>
  );
}
