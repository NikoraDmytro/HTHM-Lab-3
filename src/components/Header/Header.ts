import logoIcon from "@assets/icons/logo.svg";

export const Header = () => {
  const header = document.createElement("header");

  header.innerHTML = `
    <a href="/"><img src=${logoIcon} alt="Logo" /></a>
    <h1>Laboratory work №3</h1>
    <h3>Student: Nikora Dmytro</h3>
  `;

  return header;
};
