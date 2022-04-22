export const changeContent = (newContent: string | HTMLElement) => {
  const notebookContent = document.querySelector("#content");

  if (!notebookContent) return;

  if (typeof newContent != "string") {
    notebookContent.innerHTML = "";
    notebookContent.appendChild(newContent);
  } else {
    notebookContent.innerHTML = newContent;
  }
};
