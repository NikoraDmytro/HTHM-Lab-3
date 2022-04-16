import { renderPageWrapper } from "components/PageWrapper";

import styles from "./styles.module.scss";

const task2 = () => {
  renderPageWrapper();

  const movingImage = document.querySelector(
    "#movingImage"
  ) as HTMLImageElement;

  movingImage?.classList.add(styles.movingImage);

  let top = 0;
  let left = 0;

  setInterval(() => {
    const imageRect = movingImage.getBoundingClientRect();

    const { width, height, right, bottom } = imageRect;

    if (right + width >= window.innerWidth) {
      left = 0;
      top = bottom + height >= window.innerHeight ? 0 : top + height;
    } else {
      left += width;
    }

    movingImage.style.top = top + "px";
    movingImage.style.left = left + "px";
  }, 1000);
};

task2();
