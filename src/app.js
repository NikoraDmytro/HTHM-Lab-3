const Tasks = () => {
  return `
    <li>Block1</li>
    <li>Block2</li>
    <li>Block3</li>
  `;
};

function app() {
  const list = document.getElementsByTagName("ul")[0];

  list.innerHTML = Tasks();
}

app();
