const renderTasksList = (tasksNumber: number, blockIndex: number) => {
  const tasksList = document.createElement("ul");

  for (let index = 1; index <= tasksNumber; index++) {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <a href="../pages/Block${blockIndex}/Task${index}">
        Task ${index}
      </a>
    `;

    tasksList.appendChild(listItem);
  }

  return tasksList;
};

export const renderTasksBlocks = (...tasksInBlocks: number[]) => {
  const tasksBlocks = document.createElement("ul");
  const blocksNumber = tasksInBlocks.length;

  for (let index = 1; index <= blocksNumber; index++) {
    const block = document.createElement("li");

    const tasksNumber = tasksInBlocks[index - 1];
    const tasks = renderTasksList(tasksNumber, index);

    block.innerHTML = `<h4>Block ${index}</h4> `;
    block.appendChild(tasks);

    tasksBlocks.appendChild(block);
  }

  return tasksBlocks;
};
