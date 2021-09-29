import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Icon } from 'react-native-elements/dist/icons/Icon'
import React from 'react'
import carImg from '../assets/UberX.png'
import foodImg from '../assets/food.png'
import { selectOrigin } from '../Redux/slices/navSlice'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'

const services = [
  {
    id: '123',
    title: 'Get a ride',
    image: carImg,
    screen: 'MapScreen'
  },
  {
    id: '456',
    title: 'Order Food',
    image: foodImg,
    screen: 'FoodScreen'
  }
]

const NavOptions = () => {
  const navigation = useNavigation()
  const origin = useSelector(selectOrigin)
  return (
    <FlatList
      data={services}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={ tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={!origin}
        >
          <View style={ tw`${!origin && 'opacity-20'}`}>
            <Image 
              style={styles.serviceImg}
              source={item.image}
            />
            <Text style={ tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={ tw`p-2 bg-black rounded-full w-10 mt-4`}
              name='arrowright'
              color='white'
              type='antdesign'
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions


const styles = StyleSheet.create({
  serviceImg: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
  }
})
