import { Map, NavigateCard, RideOptionsCard } from '../components'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { Icon } from 'react-native-elements/dist/icons/Icon'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity 
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Icon name='menu'/>
      </TouchableOpacity>
      <View style={ tw`h-1/2` }>
        <Map />
      </View >
      <View style={ tw`h-1/2` }>
        
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />
           <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
        
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})

