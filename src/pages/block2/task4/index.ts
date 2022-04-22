import { renderPageWrapper } from "components/PageWrapper";

const saveCookie = (fontsize: number) => {
  const date = new Date(Date.now() + 86400e3);

  document.cookie = encodeURIComponent(
    `fontsize=${fontsize};  path=/; expires=${date.toUTCString()}`
  );
};

const task4 = () => {
  renderPageWrapper();
  let keys = "";
  const main = document.querySelector("main") as HTMLElement;

  console.log(document.cookie);

  let fontsize = document.cookie ? +document.cookie.split(";")[0].slice(9) : 16;
  main.style.fontSize = fontsize + "px";

  document.addEventListener("keydown", (event) => {
    keys += event.key;
  });
  document.addEventListener("keyup", () => {
    if (keys === "ShiftA+" || keys === "a+") {
      fontsize++;
      main.style.fontSize = fontsize + "px";
      saveCookie(fontsize);
    }
    if (keys === "ShiftA-" || keys === "a-") {
      fontsize--;
      main.style.fontSize = fontsize + "px";
      saveCookie(fontsize);
    }
    keys = "";
  });
};

task4();
