import { renderPageWrapper } from "components/PageWrapper";

import styles from "./styles.module.scss";

const task2 = () => {
  renderPageWrapper();
  const main = document.getElementsByTagName("main")[0];
  const movingImage = main.getElementsByTagName("img")[0];

  movingImage.className = styles.movingImage;

  let top = 0;
  let left = 0;

  setInterval(() => {
    left += movingImage.clientWidth;

    if (left + movingImage.width > document.body.clientWidth) {
      left = 0;
      top += movingImage.clientHeight;
    }

    if (top + movingImage.height > document.body.clientHeight) {
      top = 0;

      console.log(document.body.clientHeight);
      console.log(top, movingImage);
    }

    movingImage.style.top = top + "px";
    movingImage.style.left = left + "px";
  }, 1000);
};

task2();
