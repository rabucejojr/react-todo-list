import React from 'react'
import './TodoForm.css'
import { Button } from '@material-ui/core'
import { useState } from 'react'

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState('')
  return (
    <>
      <div className='form'>
        <form
          className='todoform'
          onSubmit={(e) => {
            e.preventDefault()
            saveTodo(value)
            setValue('')
          }}
        >
          <input
            className='todotextfield'
            variant='outlined'
            placeholder='Add Task'
            margin='normal'
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          ></input>
          <div className='add-btn'>
            <Button className='addBtn' variant='outlined' color='primary'>
              Add
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default TodoForm
