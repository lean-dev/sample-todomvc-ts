import TodosList from './todos-list';

function TodosMain() {
  // This section should be hidden by default and shown when there are todos
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodosList />
    </section>
  );
}

export default TodosMain;
