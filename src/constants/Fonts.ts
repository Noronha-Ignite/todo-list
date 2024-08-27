import { Platform } from 'react-native'

export const fonts = {
  regular: Platform.select({
    android: 'Inter_400Regular',
    ios: 'Inter-Regular',
  }),
  bold: Platform.select({
    android: 'Inter_700Bold',
    ios: 'Inter-Bold',
  }),
} as const
