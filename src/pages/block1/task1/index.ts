import { renderPageWrapper } from "components/PageWrapper";

import styles from "./styles.module.scss";

const renderText = (text: string, size: number) => {
  const main = document.querySelector("main");
  const textElement = document.createElement("p");

  textElement.textContent = text;
  textElement.style.fontSize = size + "px";

  main?.appendChild(textElement);
};

const task1 = () => {
  renderPageWrapper();

  const form = document.forms[0];

  const formValues = {
    text: "Hello World",
    fontSize: 16,
  };

  form.className = styles.addTextForm;

  const [textInput, fontSizeInput] = form.querySelectorAll("input");

  textInput.addEventListener("change", () => {
    formValues.text = textInput.value;
  });

  fontSizeInput.addEventListener("change", () => {
    formValues.fontSize = Number(fontSizeInput.value);
  });

  form.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    renderText(formValues.text, formValues.fontSize);

    window.scroll(0, window.outerHeight);
  });
};

task1();
