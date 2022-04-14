import styles from "./styles.module.scss";

const renderNavBlock = (tasksNumber: number, blockIndex: number) => {
  ++blockIndex; //Counting from "1" not "0"

  const navBlock = document.createElement("li");
  const tasksLinks = document.createElement("ul");

  navBlock.className = styles.navBlock;
  tasksLinks.className = styles.navLinksList;

  for (let i = 1; i <= tasksNumber; i++) {
    const taskLink = document.createElement("li");
    const href = `./block${blockIndex}/task${i}.html`;

    taskLink.innerHTML = `<a href=${href} class=${styles.navLink}>Task ${i}</a>`;

    tasksLinks.appendChild(taskLink);
  }

  navBlock.innerHTML = `<h4 class=${styles.blockNumber}>Block #${blockIndex}</h4>`;
  navBlock.appendChild(tasksLinks);

  return navBlock;
};

export const TasksNavigation = (...NavBlocks: number[]) => {
  const navigation = document.createElement("nav");
  const navBlocks = document.createElement("ul");

  navigation.className = styles.navigation;

  NavBlocks.forEach((tasksNumber, index) => {
    const block = renderNavBlock(tasksNumber, index);

    navBlocks.appendChild(block);
  });

  navigation.innerHTML = `<h2 class=${styles.navTitle}>Completed tasks:</h2>`;
  navigation.appendChild(navBlocks);

  return navigation;
};
