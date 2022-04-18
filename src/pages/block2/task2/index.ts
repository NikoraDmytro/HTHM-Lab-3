import { renderPageWrapper } from "components/PageWrapper";

import styles from "./styles.module.scss";

const changeRectColor = (color: string) => {
  const rect = document.querySelector("svg");

  if (!rect) return;

  rect.style.fill = color;
};

const changeListTextColor = () => {
  const colorsListItems = [].slice.call(
    document.querySelectorAll("li")
  ) as HTMLElement[];

  colorsListItems.forEach((item) => {
    const rgb = getComputedStyle(item).backgroundColor;
    const [r, g, b] = rgb
      .slice(4, -1)
      .split(",")
      .map((el) => +el.trim());

    item.style.color =
      r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white";
  });
};

const renderColorsList = (...colors: string[]) => {
  const colorsList = document.createElement("ul");

  colorsList.className = styles.colorsList;

  for (const color of colors) {
    const listItem = document.createElement("li");

    listItem.innerHTML = color;
    listItem.style.backgroundColor = color;

    listItem.addEventListener("click", () => changeRectColor(color));

    colorsList.appendChild(listItem);
  }

  return colorsList;
};

const task2 = async () => {
  renderPageWrapper();

  const colorPicker = document.querySelector("#colorPicker");
  const colorsList = renderColorsList(
    "red",
    "orange",
    "yellow",
    "green",
    "blue "
  );

  colorPicker?.classList.add(styles.colorPicker);
  colorPicker?.insertAdjacentElement("afterbegin", colorsList);
  changeListTextColor();
};

task2();
