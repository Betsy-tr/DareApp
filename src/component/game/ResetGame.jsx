import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const ResetGame = () => {

  const navigation = useNavigation()

  const reset = () => { 

    navigation.navigate('Category')

  }

  return (
    <View>
      
      <Button mode='elevated' onPress={reset}>Quitter la partie</Button>

    </View>
  )
}

export default ResetGame