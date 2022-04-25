import './App.css'
import TodoForm from './components/TodoForm'
import { Typography } from '@material-ui/core'
function App() {
  return (
    <div>
      <Typography variant='h5'>
        <TodoForm/>
      </Typography>
    </div>
  )
}

export default App
