import { Header } from "components/Header";

import styles from "./styles.module.scss";

export const renderPageWrapper = () => {
  const header = Header();

  const goBackLink = document.createElement("a");

  goBackLink.href = "/";
  goBackLink.innerHTML = "<span>Go Back</span>";
  goBackLink.className = styles.goBackLink;

  document.body.insertAdjacentElement("afterbegin", goBackLink);
  document.body.insertAdjacentElement("afterbegin", header);

  goBackLink.addEventListener("click", () => {
    document.location.replace("/");
  });
};
