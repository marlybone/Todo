import './App.css'
import Todo from './Todo'
import TodoList from './TodoList'

export default function App() {
  return (
    <main>
      <h1 className='plan'>Today's Plan :</h1>
      <TodoList />
    </main>
  )
}
