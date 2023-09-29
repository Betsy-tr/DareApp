import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NextPlayer from '../component/player/NextPlayer'
import { loadDataDareOrTruth } from '../commonjs/db'
import { getRandomInt } from '../commonjs/function'

const ShowTruthOrDare = ({navigation , route}) => {

  const {id} = route.params

  const { players , position } = useSelector(state=>state.player)

  const [Showtod, setShowtod] = useState()

  const loadDareOrTruth = async () => {

    // console.log("loadDareOrTruth")

    const dataTruthOrDare = await loadDataDareOrTruth(id)
    // console.log("dataTruthOrDare" , dataTruthOrDare)

    const index = getRandomInt(0 , dataTruthOrDare.length)
    console.log("index" , index)

    setShowtod(dataTruthOrDare[index])

  }

  useEffect(() => {

    loadDareOrTruth()

  }, [])
  

  return (
    <View>

      <Text>{players[position].name}</Text>
      <Text> {Showtod?.title} </Text>
      <NextPlayer id={id}/>
    
    </View>
  )
}

export default ShowTruthOrDare