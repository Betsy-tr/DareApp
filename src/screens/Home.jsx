import { View, Text , ImageBackground} from 'react-native'
import React from 'react'
import styles from '../../styles'
import { Button } from 'react-native-paper'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='cover'
        style={{flex: 1}}
        // source={require()}
      >
      <Button mode='elevated' onPress={() => navigation.navigate('Players')}>Ajouter des joueurs</Button>
      </ImageBackground>
    </View>
  )
}

export default Home