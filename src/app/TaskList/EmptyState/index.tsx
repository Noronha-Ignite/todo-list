import { colors } from '@/src/constants/Colors'
import { Feather } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import styles from './styles'

export const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Feather name="clipboard" size={56} color={colors.base[400]} />

      <View>
        <Text style={[styles.text, styles.fontBold]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
