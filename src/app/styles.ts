import { colors } from '@/src/constants/Colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base[600],
  },

  content: {
    transform: [{ translateY: -32 }],

    paddingHorizontal: 24,

    gap: 32,
  },
})
