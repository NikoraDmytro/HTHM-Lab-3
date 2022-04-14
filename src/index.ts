import { TasksNavigation } from "components/TasksNavigation";
import { Header } from "components/Header";
import "./index.scss";

function app() {
  const main = document.createElement("main");
  const root = document.getElementById("root");

  const header = Header();
  const navigation = TasksNavigation(6, 4, 2);

  main.appendChild(navigation);

  root?.appendChild(header);
  root?.appendChild(main);
}

app();
