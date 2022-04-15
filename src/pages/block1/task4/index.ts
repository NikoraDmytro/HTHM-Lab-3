import { renderPageWrapper } from "components/PageWrapper";

import styles from "./styles.module.scss";

const task2 = () => {
  renderPageWrapper();

  let interval = 1000;
  const button =
    document.getElementById("speedUp") ?? document.createElement("button");
  const clock =
    document.getElementById("clock") ?? document.createElement("div");
  const now = new Date();

  clock.textContent = now.toLocaleTimeString();
  clock.className = styles.clock;

  const newClockInterval = (interval: number) => {
    const prev = setInterval(() => {
      now.setSeconds(now.getSeconds() + 1);

      clock.textContent = now.toLocaleTimeString();
    }, interval);

    return () => clearInterval(prev);
  };

  let clear = newClockInterval(interval);

  button.className = styles.speedUpBtn;

  button.addEventListener("click", () => {
    interval /= 2;

    if (interval < 10) {
      alert("Too fast! Clock reset!");
      interval = 1000;
    }

    clear();
    clear = newClockInterval(interval);
  });
};

task2();
