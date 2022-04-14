import logoIcon from "assets/icons/logo.svg";
import styles from "./styles.module.scss";

export const Header = () => {
  const header = document.createElement("header");
  header.className = styles.header;

  header.innerHTML = `
    <a href="/"><img src=${logoIcon} alt="Logo" /></a>
    <h1>Laboratory work №3</h1>
    <div class=${styles.studentInfo}>
      <p>
        <strong>Group:</strong>
        <span>PZPI-21-3</span>
      </p>
      <p>
        <strong>Student:</strong>
        <span>Nikora Dmytro</span>
      </p>
    </div>
  `;

  return header;
};
