import { StyleSheet, Text, View } from 'react-native'

import { GOOGLE_MAPS_APIKEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Icon } from 'react-native-elements'
import NavFav from './NavFav'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { setDestination } from '../Redux/slices/navSlice'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/core'

const NavigateCard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  
  const onSelectedDestination = (data, details) => {
    dispatch(
      setDestination({
        location: details.geometry.location,
        description: data.description
      })
    )
    navigation.navigate('RideOptionsCard')
  }
  
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center p-2 text-xl`}>Hello user</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete 
            placeholder= 'To...'
            fetchDetails={true}
            styles={GgAutoInputStyles}
            returnKeyType={'Search'}
            minLength={2}
            onPress={(data, details = null) => onSelectedDestination(data, details)}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en'
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
        </View>
        <NavFav />
      </View>
      
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity  
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
        >
          <Icon name='car' 
            type='font-awesome' color='white' size={16} 
          />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon name='fast-food-outline' type='ionicon' color='black' size={16} />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const GgAutoInputStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 6,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})
