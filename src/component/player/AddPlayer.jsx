import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { addPlayer } from '../../redux/player'

const AddPlayer = () => {

  const [name , setName] = useState()

  const dispatch = useDispatch()

  const send = (value) => { // Enregistrement du joueur 

    // Formatage de la donnée à ajouter dans le store
    const newPlayer = {

      id: Date.now() ,
      name: value ,

    }

    dispatch(addPlayer(newPlayer))

    setName('') // Vide le textInput

  }

  return (
    <>

      <TextInput

        label='Nom du joueur'
        value={name}
        mode='outlined'
        onChangeText={text=>setName(text)}
        onSubmitEditing={(value)=>send(value.nativeEvent.text)}

      />

    </>
  )
}

export default AddPlayer