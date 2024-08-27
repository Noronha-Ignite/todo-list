import { colors } from '@/src/constants/Colors'
import { fonts } from '@/src/constants/Fonts'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },

  info: {
    flexDirection: 'row',
    gap: 8,

    alignItems: 'center',
  },

  infoTitle: {
    fontSize: 14,
  },
  infoCountText: {
    color: colors.base[200],
    fontSize: 12,
  },
  infoCount: {
    borderRadius: 14,
    backgroundColor: colors.base[400],
    paddingVertical: 2,
    paddingHorizontal: 8,
  },

  colorPrimary: {
    color: colors.primary.light,
  },
  colorSecondary: {
    color: colors.secondary.light,
  },
  fontBold: {
    fontFamily: fonts.bold,
  },

  listContainer: {
    gap: 8,
    marginTop: 20,
  },
})
