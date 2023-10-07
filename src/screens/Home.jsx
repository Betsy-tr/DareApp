import { View, Text , ImageBackground  , Image , TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles'
import { Button } from 'react-native-paper'


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        // resizeMode='scretch'
        style={{flex: 1}}
        // width='100%'
        source={require('../home.png')}
      >
      {/* <Button mode='elevated' onPress={() => navigation.navigate('Players')}>Ajouter des joueurs</Button> */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Players')}> 
        <Image source={require('../buttonCommencer.png')} />
      </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Home