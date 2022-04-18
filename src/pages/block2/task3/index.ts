import { renderPageWrapper } from "components/PageWrapper";

import styles from "./styles.module.scss";

const task3 = () => {
  renderPageWrapper();
  const taskWrapper = document.querySelector("#taskWrapper");

  taskWrapper?.classList.add(styles.taskWrapper);

  document.addEventListener("keypress", (event: KeyboardEvent) => {
    const pressedBtn = document.querySelector("#pressedBtn") as HTMLElement;

    pressedBtn.innerText = String(event.keyCode);
  });
  document.addEventListener("mousemove", (event: MouseEvent) => {
    const XPos = document.querySelector("#XPos") as HTMLElement;
    const YPos = document.querySelector("#YPos") as HTMLElement;

    XPos.innerText = String(event.x);
    YPos.innerText = String(event.y);
  });
};

task3();
