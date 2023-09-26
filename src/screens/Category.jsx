import { View, Text } from 'react-native'
import React from 'react'
import { Button, Menu } from 'react-native-paper'

const Category = ({navigation}) => {

  const goBack = () => { 

    navigation.goBack()
  
  }

  return (
    <View>

      <Menu.Item leadingIcon="undo" onPress={goBack} title=""/>
      <Text>Choisissez une catégorie</Text>
      <Button mode='elevated' onPress={()=>navigation.navigate('TruthOrDare')}>NEXT</Button>
    
    </View>
  )
}

export default Category