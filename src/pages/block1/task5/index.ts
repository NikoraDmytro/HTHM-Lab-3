import { renderPageWrapper } from "components/PageWrapper";

const task2 = () => {
  renderPageWrapper();

  const fadeOutText = document.querySelector("#fadeOut");
  let opacity = 1;

  const interval = setInterval(() => {
    opacity -= 0.05;

    fadeOutText?.setAttribute("style", `opacity: ${opacity}`);

    if (opacity <= 0) {
      clearInterval(interval);
    }
  }, 1000);
};

task2();
