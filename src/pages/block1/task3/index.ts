import { renderPageWrapper } from "components/PageWrapper";

import styles from "./styles.module.scss";

const task2 = () => {
  const main = document.getElementsByTagName("main")[0];
  const button = main.getElementsByTagName("button")[0];
  const paragraphs = main.getElementsByTagName("p");

  button.className = styles.changeFontSizeBtn;

  button.addEventListener("click", () => {
    for (let paragraph of paragraphs) {
      paragraph.setAttribute("style", "font-size: 15px");
    }
  });

  renderPageWrapper();
};

task2();
