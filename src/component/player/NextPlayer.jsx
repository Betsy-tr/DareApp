import { View, Text , TouchableOpacity , Image } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { nextPlayer } from '../../redux/player'
import stylePlayers from '../../../stylePlayers'

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
      
      {/* <Button mode='elevated' onPress={suivant}>Joueur suivant</Button> */}

      <TouchableOpacity style={{marginTop: 80, marginLeft: 55}} onPress={suivant}> 
        <Image source={require('../../joueurSuivant.png')} />
      </TouchableOpacity>
    
    </View>
  )
}

export default NextPlayer