import { colors } from '@/src/constants/Colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: 64,
    gap: 4,
    flexDirection: 'row',
  },

  todoInput: {
    flex: 1,
    backgroundColor: colors.base[500],
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.base[100],

    borderWidth: 1,
    borderColor: colors.base[700],
  },
  addBtn: {
    height: 64,
    aspectRatio: 1,
    backgroundColor: colors.primary.dark,
    borderRadius: 6,

    justifyContent: 'center',
    alignItems: 'center',
  },
})
