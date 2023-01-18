import TodosActionbar from './todos-actionbar';
import TodosInput from './todos-input';
import TodosMain from './todos-main';

function TodosShell() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodosInput />
      </header>
      <TodosMain />
      <TodosActionbar />
    </section>
  );
}

export default TodosShell;
