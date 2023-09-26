import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../styles'
import { Button } from 'react-native-paper'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button mode='elevated' onPress={() => navigation.navigate('Players')}>Ajouter des joueurs</Button>
    </View>
  )
}

export default Home