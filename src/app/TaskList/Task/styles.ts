import { colors } from '@/src/constants/Colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.base[500],
    borderRadius: 8,

    minHeight: 64,

    alignItems: 'center',
    flexDirection: 'row',
  },

  check: {
    borderWidth: 2,
    borderColor: colors.primary.light,
    height: 16,
    width: 16,
    borderRadius: 16,

    justifyContent: 'center',
    alignItems: 'center',
  },
  checkFilled: {
    borderColor: colors.secondary.dark,
    backgroundColor: colors.secondary.dark,
  },

  contentText: {
    flex: 1,
    marginLeft: 8,

    color: colors.base[100],
  },

  linedThrough: {
    textDecorationLine: 'line-through',
  },

  deleteBtn: {
    padding: 8,
  },
})
