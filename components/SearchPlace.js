import { LogBox, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

import { GOOGLE_MAPS_APIKEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchPlace = ({handleOnSearch}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
  return (
  
         <GooglePlacesAutocomplete
          placeholder= 'From...'
          fetchDetails={true}
          onPress={(data, details = null) => handleOnSearch(data, details)}
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
          
          returnKeyType={'Search'}
          enablePoweredByContainer={false}
          minLength={2}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          
        />
  )
}

export default SearchPlace

const styles = StyleSheet.create({})
