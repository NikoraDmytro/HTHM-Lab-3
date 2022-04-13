const renderNavBlock = (tasksNumber: number, blockIndex: number) => {
  ++blockIndex; //Counting from "1" not "0"

  const navBlock = document.createElement("li");
  const navList = document.createElement("ul");

  for (let i = 1; i <= tasksNumber; i++) {
    const taskLink = document.createElement("li");
    const href = `@pages/block${blockIndex}/task${i}`;

    taskLink.innerHTML = `<a href=${href}>Task ${i}</a>`;

    navList.appendChild(taskLink);
  }

  navBlock.innerHTML = `<h4>Block ${blockIndex}</h4>`;
  navBlock.appendChild(navList);

  return navBlock;
};

export const TasksNavigation = (...NavBlocks: number[]) => {
  const navigation = document.createElement("nav");
  const navBlocks = document.createElement("ul");

  NavBlocks.forEach((tasksNumber, index) => {
    const block = renderNavBlock(tasksNumber, index);

    navBlocks.appendChild(block);
  });

  navigation.innerHTML = "<h2>Completed tasks:</h2>";
  navigation.appendChild(navBlocks);

  return navigation;
};
