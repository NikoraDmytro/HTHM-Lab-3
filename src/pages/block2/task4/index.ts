import { renderPageWrapper } from "components/PageWrapper";

const task4 = () => {
  renderPageWrapper();
  let keys = "";
  const main = document.querySelector("main") as HTMLElement;

  let fontsize = document.cookie ? +document.cookie.slice(9) : 16;
  main.style.fontSize = fontsize + "px";

  document.addEventListener("keydown", (event) => {
    keys += event.key;
  });
  document.addEventListener("keyup", () => {
    if (keys === "ShiftA+" || keys === "a+") {
      fontsize++;
      main.style.fontSize = fontsize + "px";
    }
    if (keys === "ShiftA-" || keys === "a-") {
      fontsize--;
      main.style.fontSize = fontsize + "px";
    }
    keys = "";
  });

  window.onbeforeunload = () => {
    document.cookie = `fontsize=${fontsize}`;

    return null;
  };
};

task4();
