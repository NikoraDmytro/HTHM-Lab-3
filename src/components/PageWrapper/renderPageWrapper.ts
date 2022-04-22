import { Header } from "components/Header";

import styles from "./styles.module.scss";

export const renderPageWrapper = () => {
  const header = Header();

  const goBackLink = document.createElement("a");

  goBackLink.href = "./index.html";
  goBackLink.innerHTML = "<span>Go Back</span>";
  goBackLink.className = styles.goBackLink;

  document.body.insertAdjacentElement("afterbegin", goBackLink);
  document.body.insertAdjacentElement("afterbegin", header);

  goBackLink.addEventListener("click", (e) => {
    e.preventDefault();

    window.history.back();
  });
};
