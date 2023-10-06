import { View, Text  , StyleSheet} from 'react-native'
import React from 'react'
import { Button, IconButton  } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { delPlayer } from '../../redux/player'
import stylePlayers from '../../../stylePlayers'
import Separateur from '../../../stylePlayers'


const ItemPlayer = ({player}) => {

  const dispatch = useDispatch() 

  const supprimer = () => { 

    dispatch(delPlayer(player))
    
  }

  const Separateur = () => {

    return <View style={styles.separateur} />;

  }

  const styles = StyleSheet.create({
    separateur: {
      borderBottomColor: "white",
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginVertical: 1,
      paddingLeft: 20,
    },
  });

  return (
    <View style={stylePlayers.contentPlayer}>
      <Text style={stylePlayers.namePlayer}>{player.name}</Text>
      <Button labelStyle={{ color : 'white' , fontSize : 15, }} onPress={supprimer}>Effacer</Button>
      
      
      <Separateur/>
      
    </View>
  )
}

export default ItemPlayer