import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const StartGame = () => {

    const navigation = useNavigation()

    const { players } = useSelector(state=>state.player)
    
    const start = () => { 

        navigation.navigate('Category')
    }

  return (
    <View>
      {/* {players.length >= 2 && <Button mode='elevated'>JOUER</Button>} */}
      {<Button mode='elevated' disabled={!(players.length >= 2)} onPress={start}>Commencer la partie</Button>}
    </View>
  )
}

export default StartGame