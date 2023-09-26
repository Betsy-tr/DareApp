import { View, Text } from 'react-native'
import React from 'react'
import { Button, Menu } from 'react-native-paper'

const TruthOrDare = ({navigation , route}) => {

  const { id } = route.params

  const goBack = () => { // Fonction pour retourner à la page précédente

    navigation.goBack()
  
  }

  return (
    <View>
      
      <Menu.Item leadingIcon="undo" onPress={goBack} title=""/>
      <Text>Que vas-tu choisir ?😈</Text>
      <Button mode='elevated' onPress={()=>navigation.navigate('ShowTruthOrDare' , {id: id , type:'truth'})}>VÉRITÉ</Button>
      <Button mode='elevated' onPress={()=>navigation.navigate('ShowTruthOrDare' , {id: id , type:'dare'})}>ACTION</Button>
    
    </View>
  )
}

export default TruthOrDare