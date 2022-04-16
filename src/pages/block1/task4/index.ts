import { renderPageWrapper } from "components/PageWrapper";

import styles from "./styles.module.scss";

const task4 = () => {
  renderPageWrapper();

  const clock = document.querySelector("#clock") as Element;
  const button = document.querySelector("#speedUp");

  let counter = 1000;
  const now = new Date();

  clock.textContent = now.toLocaleTimeString();
  clock.classList.add(styles.clock);

  button?.classList.add(styles.speedUpBtn);

  const clockTic = () => {
    now.setSeconds(now.getSeconds() + 1);

    clock.textContent = now.toLocaleTimeString();
  };

  let interval = setInterval(clockTic, counter);

  button?.addEventListener("click", () => {
    counter /= 2;

    if (counter < 10) {
      alert("Too fast! Clock reset!");
      counter = 1000;
    }

    clearInterval(interval);
    interval = setInterval(clockTic, counter);
  });
};

task4();
