import React from "react";
import { storiesOf } from "@storybook/react";
import { themeContent } from "../theme";
import Content from "./Content.component";

import hyf from "../../assets/images/hyf.png";

const hyfLogo = {
  src: hyf,
  alt: "hyf logo"
};

storiesOf("Content", module).add("Content", () => (
  <div>
    <Content
      title="About project"
      text="Boilerplate for Final projects."
      hyfLogo={hyfLogo}
      theme={themeContent}
    />
  </div>
));
