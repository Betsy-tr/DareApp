import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { nextPlayer } from '../../redux/player'

const NextPlayer = () => {

    const dispatch = useDispatch()

    const { players , position } = useSelector(state=>state.player)

    const navigation = useNavigation()

    const suivant = () => {

        if(players.length == position+1){

            dispatch(nextPlayer(0))

        }else{

            dispatch(nextPlayer(position + 1))

        }

        navigation.navigate('TruthOrDare')
    }

  return (
    <View>
      
      <Button mode='elevated' onPress={suivant}>Joueur suivant</Button>
    
    </View>
  )
}

export default NextPlayer