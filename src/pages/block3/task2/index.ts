import { renderPageWrapper } from "components/PageWrapper";
import { RouteParams, Router } from "./Router";

interface Note {
  text: string;
  createdAt: Date;
}

const noteBook = () => {
  return `
    <div>
      <div>
        <button>
          <span></span>
          <span></span>
        </button>
    
        <h2>New note</h2>
      </div>
    
      <ul>
        
      </ul>
    </div>
  `;
};

const addNoteForm = () => {
  return `
    <form>
      <legend>Add new note</legend>

      <input />

      <button>Create note</button>
    </form>
  `;
};

const note = (params?: RouteParams) => {
  return `
    <h1>Note from ${params?.date}</h1>
  `;
};

const task2 = () => {
  renderPageWrapper();
  const main = document.querySelector("main");

  const router = new Router("/notebook", [
    {
      path: "/notebook",
      component: noteBook,
    },
    {
      path: "/addNote",
      component: addNoteForm,
    },
    {
      path: "/notes/:date",
      component: (params) => note(params),
    },
  ]);

  main?.appendChild(router.render());
};

task2();
