import { colors } from '@/src/constants/Colors'
import { fonts } from '@/src/constants/Fonts'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',

    paddingTop: 48,

    gap: 16,
    borderTopWidth: 1,
    borderTopColor: colors.base[400],
  },

  text: {
    color: colors.base[300],
    textAlign: 'center',
  },

  fontBold: {
    fontFamily: fonts.bold,
  },
})
