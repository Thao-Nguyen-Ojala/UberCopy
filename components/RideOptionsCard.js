import 'intl'
import 'intl/locale-data/jsonp/en'

import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { Icon } from 'react-native-elements'
import UberLux from '../assets/Lux.png'
import UberX from '../assets/UberX.png'
import UberXL from '../assets/UberXL.png'
import { selectTravelTimeInfo } from '../Redux/slices/navSlice'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const carsList = [
  {
    id: 'Uber-X-123',
    title: 'Uber-X',
    multiflier: 1,
    image: UberX
  },
  {
    id: 'Uber-XL-123',
    title: 'Uber-XL',
    multiflier: 1.2,
    image: UberXL
  },
  {
    id: 'Uber-LUX-123',
    title: 'Uber-Lux',
    multiflier: 1.75,
    image: UberLux
  }
]

//if surge pricing => increase the rate
const SURGE_CHARGE_RATE = 1.5 

const RideOptionsCard = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  const travelTimeInfo = useSelector(selectTravelTimeInfo)
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <ScrollView>
        <View style={tw`flex flex-row items-center justify-between flex-shrink pt-3 pb-3 border-b border-gray-300`}>
          <TouchableOpacity
            style={[tw`flex-none w-12 px-2.5 rounded-full`]}
            onPress={() => navigation.navigate('NavigateCard')}
          > 
            <Icon 
              name='chevron-left' 
              type='fontawesome'  
            />
          </TouchableOpacity>
          <Text style={tw`flex-1 px-1 text-xl`}>Select a ride - {travelTimeInfo?.distance?.text}</Text>
        </View>

        <FlatList 
          data={carsList}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={tw`flex-row justify-between items-center px-10 ${item.id === selected?.id && 'bg-gray-200'}`}
              onPress={() => setSelected(item)}
            >
              <Image 
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain'
                }}
                source={item.image}
              />
              <View style={tw`-ml-6`}>
                <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
                <Text>{travelTimeInfo?.duration?.text}</Text>
              </View>
              <Text style={tw`text-xl`}>
                {new Intl.NumberFormat('en-gb', {
                  style: 'currency',
                  currency: 'eur'
                }).format(
                  travelTimeInfo?.duration?.value * SURGE_CHARGE_RATE * item.multiflier / 100
                )
                }
              </Text>
              
            </TouchableOpacity>
          )}
        />
        <View style={tw`mt-auto border-t border-gray-300`}>
          <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
            <Text style={tw`text-center text-white text-xl`}>
              Selected {selected?.title}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
