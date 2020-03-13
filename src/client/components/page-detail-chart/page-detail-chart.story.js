import React from 'react';
import {storiesOf} from "@storybook/react";
import Page from "./page-detail-chart.component";

storiesOf ("Pages", module).add("Page with detailed chart", () => {
    return <Page title="Humidity graph details" />;
});