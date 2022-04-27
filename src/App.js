import './App.css'
import TodoForm from './components/TodoForm'
import { Typography } from '@material-ui/core'

function App() {
  return (
    <div>
      <Typography component='h1' variant='h2'>
        Todos
      </Typography>
      <TodoForm saveTodo={console.warn} />
    </div>
  )
}

export default App
