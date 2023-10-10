import { View, Text } from 'react-native'
import React, { useEffect, useState  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NextPlayer from '../component/player/NextPlayer'
import { loadDataDareOrTruth } from '../commonjs/db'
import { getRandomInt } from '../commonjs/function'
import ResetGame from '../component/game/ResetGame'
import { updateTod } from '../redux/player'


const ShowTruthOrDare = ({navigation , route}) => {

  const {id , type} = route.params

  const dispatch = useDispatch()

  const { players , position } = useSelector(state=>state.player)

  const [Showtod, setShowtod] = useState()

  const loadDareOrTruth = async () => {

    console.log("players" , players[position].tod)

    const { tod } = players[position]

    const dataTruthOrDare = await loadDataDareOrTruth(id , type , tod)
    // console.log("dataTruthOrDare" , dataTruthOrDare)
    // console.log('type' , type)

    const index = getRandomInt(0 , dataTruthOrDare.length)
    // console.log("index" , index)

    setShowtod(dataTruthOrDare[index])

    // Enregistrement du tod du player dans le store
    dispatch(updateTod(dataTruthOrDare[index].id))

  }

  useEffect(() => {

    loadDareOrTruth()

  }, [])
  

  return (
    <View style={{backgroundColor: 'black' , flex: 1}}>

      <Text style={{color: 'blue' , fontSize:30  , marginTop: 50 , fontFamily: 'serif' , textAlign: 'center'}}>{players[position].name}</Text>
      <Text style={{color: 'white' , fontFamily: 'serif' , fontSize:30 , marginLeft: 10 , textAlign: 'center' , marginTop: 70}}> {Showtod?.title} </Text>
      <NextPlayer id={id}/>
      <ResetGame/>
    
    </View>
  )
}

export default ShowTruthOrDare