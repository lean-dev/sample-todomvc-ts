function TodosItem() {
  // List items should get the className `editing` when editing and `completed` when marked as completed
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>Buy a unicorn</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" defaultValue="Rule the web" />
    </li>
  );
}

export default TodosItem;
