import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/src/constants/Colors'
import { Task as ITask } from '@/src/models/task'
import { useTasks } from '@/src/contexts/TasksContext'

interface TaskProps {
  task: ITask
}

export const Task = ({ task }: TaskProps) => {
  const { removeTask, toggleTaskCheck } = useTasks()

  const handleTaskPress = () => {
    toggleTaskCheck(task.id)
  }

  const handleTaskDelete = () => {
    removeTask(task.id)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={handleTaskPress}
    >
      <View
        style={task.checked ? [styles.check, styles.checkFilled] : styles.check}
      >
        {task.checked && (
          <Feather name="check" color={colors.base[100]} size={8} />
        )}
      </View>

      <Text
        style={
          task.checked
            ? [styles.contentText, styles.linedThrough]
            : styles.contentText
        }
      >
        {task.description}
      </Text>

      <TouchableOpacity
        onPress={handleTaskDelete}
        style={styles.deleteBtn}
        activeOpacity={0.7}
      >
        <Feather name="trash-2" color={colors.base[300]} size={14} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
