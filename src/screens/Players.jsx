import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles'
import ItemPlayer from '../component/player/ItemPlayer'
import EmptyPlayer from '../component/player/EmptyPlayer'
import AddPlayer from '../component/player/AddPlayer'
import ResetPlayer from '../component/player/ResetPlayer'
import StartGame from '../component/game/StartGame'

const Players = () => {

  const { players } = useSelector(state=>state.player) // Récupération de la liste des joueurs dans le store
  

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={({item})=><ItemPlayer player={item}/>}
        keyExtractor={item=>item.id}
        ListEmptyComponent={EmptyPlayer} // Quand la liste est vide, on appelle le composant Empty pour indiquer qu'il n'y a pas de joueurs 
        ListHeaderComponent={AddPlayer} // Appel du composant header pour l'ajout des joueurs 
      />
      <StartGame/>
      <ResetPlayer/>
    </View>
  )
}

export default Players