import { SafeAreaView, View } from 'react-native'
import styles from './styles'
import { LogoSvg } from '@/src/assets/svgs/LogoSvg'
import React from 'react'

export const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <LogoSvg />
      </View>
    </SafeAreaView>
  )
}
