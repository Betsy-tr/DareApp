import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Menu } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { updateLoading } from '../redux/loading'
import { loadData } from '../commonjs/db'
import ItemCategory from '../component/ItemCategory'

const Category = ({navigation}) => {

  const [categories, setCategories] = useState([])
  const loading = useSelector(state=>state.loading)
  const dispatch = useDispatch()

  const loadCategory = async () => { 

    dispatch(updateLoading())

    // const dataCategories = await loadData('categorie')
    const dataCategories = await loadData('category') // base de donnée test

    setCategories(dataCategories)

    dispatch(updateLoading())

  }

  useEffect(() => {

    loadCategory()

  }, [])

  const goBack = () => { 

    navigation.goBack()
  
  }

  return (
    <View>

      <Menu.Item leadingIcon="undo" onPress={goBack} title=""/>
      <Text>Choisissez une catégorie</Text>
      <FlatList
        data={categories}
        renderItem={({item})=><ItemCategory category={item} />}
        keyExtractor={item=>item.id}
      />
      <Button mode='elevated' onPress={()=>navigation.navigate('TruthOrDare')}>NEXT</Button>
    
    </View>
  )
}

export default Category