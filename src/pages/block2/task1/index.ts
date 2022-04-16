import { renderPageWrapper } from "components/PageWrapper";
import { Tooltip } from "components/Tooltip";

import styles from "./styles.module.scss";

const tooltipContent = {
  label: "Click on me!",
  text: "A big block of absolutely useless text appeared! I mean a really big block of text which is needed to test the functionality of this tooltip. And a couple more words. Finally, the long awaited end!",
};

const task1 = () => {
  renderPageWrapper();

  const topTooltips = document.querySelector("#topTooltips");
  const bottomTooltips = document.querySelector("#bottomTooltips");

  topTooltips?.classList.add(styles.tooltipsBlock);
  bottomTooltips?.classList.add(styles.bottomTooltips, styles.tooltipsBlock);

  for (let i = 0; i < 3; i++) {
    const tooltip = Tooltip(tooltipContent.label, tooltipContent.text);
    topTooltips?.appendChild(tooltip);
  }
  for (let i = 0; i < 3; i++) {
    const tooltip = Tooltip(tooltipContent.label, tooltipContent.text);
    bottomTooltips?.appendChild(tooltip);
  }
};

task1();
