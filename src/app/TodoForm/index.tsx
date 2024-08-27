import { colors } from '@/src/constants/Colors'
import { Feather } from '@expo/vector-icons'
import { TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { useTasks } from '@/src/contexts/TasksContext'
import { useState } from 'react'

export const TodoForm = () => {
  const [taskDescription, setTaskDescription] = useState('')
  const { addTask } = useTasks()

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.base[300]}
        style={styles.todoInput}
        onChangeText={setTaskDescription}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.addBtn}
        onPress={() => addTask(taskDescription)}
      >
        <Feather name="plus-circle" size={20} color={colors.base[100]} />
      </TouchableOpacity>
    </View>
  )
}
