import { FlatList, Text, View } from 'react-native'
import styles from './styles'
import { useTasks } from '@/src/contexts/TasksContext'
import { Task } from './Task'
import { EmptyState } from './EmptyState'

export const TaskList = () => {
  const { tasks } = useTasks()

  return (
    <View>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text
            style={[styles.infoTitle, styles.colorPrimary, styles.fontBold]}
          >
            Criadas
          </Text>

          <View style={styles.infoCount}>
            <Text style={styles.infoCountText}>0</Text>
          </View>
        </View>

        <View style={styles.info}>
          <Text
            style={[styles.infoTitle, styles.colorSecondary, styles.fontBold]}
          >
            Concluídas
          </Text>
          <View style={styles.infoCount}>
            <Text style={styles.infoCountText}>0</Text>
          </View>
        </View>
      </View>

      <FlatList
        ListEmptyComponent={<EmptyState />}
        data={tasks}
        renderItem={({ item }) => <Task task={item} />}
        keyExtractor={({ id }) => id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  )
}
