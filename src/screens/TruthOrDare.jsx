import { View, Text , Image , ImageBackground , TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Menu } from 'react-native-paper'
import { useSelector } from 'react-redux'
import styles from '../../styles'

const TruthOrDare = ({navigation , route}) => {

  const { id } = route.params

  const { players , position } = useSelector(state=>state.player)

  const goBack = () => { // Fonction pour retourner à la page précédente

    navigation.goBack()
  
  }

  return (
    <View style={{flex : 1}}>

      <ImageBackground
        style={{flex : 1}}
        source={require('../TruthOrDare.png')}
      >
      
        <Menu.Item leadingIcon="undo" onPress={goBack} title="" style={{borderColor : 'red'}}/>
        <Text style={{color: 'blue' , fontSize:25 , marginLeft: 55 , marginTop: 110 , fontFamily: 'serif'}}>Que vas-tu choisir ? 😈</Text>
        <Text style={{color: 'red' , fontSize:35 , marginLeft: 150 , marginTop: 35 , fontFamily: 'serif'}} >{players[position].name}</Text>
        {/* <Button mode='elevated' onPress={()=>navigation.navigate('ShowTruthOrDare' , {id: id , type:'vérité'})}>VÉRITÉ</Button>
        <Button mode='elevated' onPress={()=>navigation.navigate('ShowTruthOrDare' , {id: id , type:'action'})}>ACTION</Button> */}

        <View>
          <TouchableOpacity style={{marginTop: 135 , marginLeft: 50}} onPress={()=>navigation.navigate('ShowTruthOrDare' , {id: id , type:'truth'})}> 
            <Image source={require('../buttonVerite.png')} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={{marginTop: 100 , marginLeft: 50}} onPress={()=>navigation.navigate('ShowTruthOrDare' , {id: id , type:'dare'})}> 
            <Image source={require('../buttonAction.png')} />
          </TouchableOpacity>
        </View>
      
      </ImageBackground>

    </View>
  )
}

export default TruthOrDare