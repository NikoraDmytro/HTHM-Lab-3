import { TasksNavigation } from "./components/TasksNavigation";
import { Header } from "./components/Header";
import "./index.css";

function app() {
  const header = Header();
  const navigation = TasksNavigation(6, 4, 2);
  const root = document.getElementById("root");

  root?.appendChild(header);
  root?.appendChild(navigation);
}

app();
