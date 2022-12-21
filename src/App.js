import './App.css';
import TodoListInput from './TodoListInput';
import TodoListItem from './TodoListItem';
import useTodo from "./useTodo";

function App() {

  const {items, addItem, removeItem } = useTodo();
  
  return (
    <main>
      <TodoListInput onAddTodo={addItem}/>
      <ul>
        {items.map((item) => (
          <TodoListItem key={item.id} item= {item.item} />
        ))}
      </ul>
    </main>
  );
}

export default App;
