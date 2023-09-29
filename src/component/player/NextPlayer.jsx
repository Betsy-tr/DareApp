import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { nextPlayer } from '../../redux/player'

const NextPlayer = ({id}) => {

    const dispatch = useDispatch()

    const { players , position } = useSelector(state=>state.player)

    const navigation = useNavigation()


    // Cette fonction permet de passer au joueur suivant
    const suivant = () => {

        if(players.length == position + 1){

            dispatch(nextPlayer(0))

        }else{

            dispatch(nextPlayer(position + 1))

        }

        navigation.navigate('TruthOrDare' , {id: id})
    }

  return (
    <View>
      
      <Button mode='elevated' onPress={suivant}>Joueur suivant</Button>
    
    </View>
  )
}

export default NextPlayer