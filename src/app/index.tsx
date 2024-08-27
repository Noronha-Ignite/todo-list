import { View } from 'react-native'
import React from 'react'
import { Header } from './Header'
import styles from './styles'
import { TodoForm } from './TodoForm'
import { TaskList } from './TaskList'
import { TasksContextProvider } from '../contexts/TasksContext'

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <TasksContextProvider>
          <TodoForm />

          <TaskList />
        </TasksContextProvider>
      </View>
    </View>
  )
}
