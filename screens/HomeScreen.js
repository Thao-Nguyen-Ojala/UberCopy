import { Image, SafeAreaView, StyleSheet, View } from 'react-native'

import React from 'react'
import tw from 'tailwind-react-native-classnames'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
          style={styles.headerLogo}
          source={require('../assets/2560px-Uber_logo_2018.svg.png')}
        />
      </View>
    </SafeAreaView >
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
})
