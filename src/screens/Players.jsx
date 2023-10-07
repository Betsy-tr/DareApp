import { View, Text, FlatList , ImageBackground } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import stylePlayers from '../../stylePlayers'
import ItemPlayer from '../component/player/ItemPlayer'
import EmptyPlayer from '../component/player/EmptyPlayer'
import AddPlayer from '../component/player/AddPlayer'
import ResetPlayer from '../component/player/ResetPlayer'
import StartGame from '../component/game/StartGame'
import LinearGradient from 'react-native-linear-gradient'

const Players = () => {

  const { players } = useSelector(state=>state.player) // Récupération de la liste des joueurs dans le store
  

  return (
    <View style={stylePlayers.container}>
      
      <ImageBackground
        resizeMode='scretch'
        style={{flex: 1}}
        width='100%'
        source={require('../pageJoueur.png')}
      >
      
      <FlatList
        data={players}
        renderItem={({item})=><ItemPlayer player={item}/>}
        keyExtractor={item=>item.id}
        ListEmptyComponent={EmptyPlayer} // Quand la liste est vide, on appelle le composant Empty pour indiquer qu'il n'y a pas de joueurs 
        ListHeaderComponent={AddPlayer} // Appel du composant header pour l'ajout des joueurs 
        style={{marginTop: 25}}
      />
      <StartGame/>
      <ResetPlayer/>
      </ImageBackground>
    </View>
  )
}

export default Players