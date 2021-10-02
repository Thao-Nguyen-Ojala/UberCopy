import { Image, LogBox, SafeAreaView, StyleSheet, View } from 'react-native';
import { NavFav, NavOptions, SearchPlace } from '../components';
import React, { useEffect } from 'react';
import { setDestination, setOrigin } from '../Redux/slices/navSlice';

import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  const onSearch = (data, details ) => {
    dispatch(
      setOrigin({
        location: details.geometry.location, 
        description: data.description
      })
    )
    dispatch(setDestination(null))
  }

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
          style={styles.headerLogo}
          source={require('../assets/2560px-Uber_logo_2018.svg.png')}
        />
        <SearchPlace handleOnSearch={onSearch}/>
       
        <NavOptions />
        <NavFav />
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
  },
 
})
