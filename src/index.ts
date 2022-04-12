import { renderTasksBlocks } from "./components/TasksBlocks/TasksBlocks";

function app() {
  const tasksBlocks = renderTasksBlocks(6, 4, 2);

  document.body.appendChild(tasksBlocks);
}

app();
