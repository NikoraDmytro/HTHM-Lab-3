import { renderPageWrapper } from "components/PageWrapper";

import styles from "./styles.module.scss";

const task3 = () => {
  const main = document.querySelector("main");
  const button = main?.querySelector("button");
  const paragraphs = main?.getElementsByTagName("p") || [];

  button?.classList.add(styles.changeFontSizeBtn);

  button?.addEventListener("click", () => {
    for (let paragraph of paragraphs) {
      paragraph.setAttribute("style", "font-size: 15px");
    }
  });

  renderPageWrapper();
};

task3();
