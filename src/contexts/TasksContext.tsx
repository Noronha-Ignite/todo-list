import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { Task } from '../models/task'
import { generateUUID } from '../utils/generateUUID'

interface TasksContextProps {
  tasks: Array<Task>

  removeTask: (taskId: string) => void
  addTask: (description: string) => void
  toggleTaskCheck: (taskId: string) => void
}

const TasksContext = createContext({} as TasksContextProps)

export const TasksContextProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<Array<Task>>([])

  const addTask = (description: string) => {
    const newId = generateUUID()

    setTasks((previous) => [
      ...previous,
      { id: newId, description, checked: false },
    ])
  }

  const removeTask = (taskId: string) => {
    setTasks((previous) => previous.filter((task) => task.id !== taskId))
  }

  const toggleTaskCheck = (taskId: string) => {
    setTasks((previous) =>
      previous.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            checked: !task.checked,
          }
        }

        return task
      }),
    )
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        toggleTaskCheck,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => useContext(TasksContext)
