import { View, Text , FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from './component/CardProduct'
import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native-paper';
import { stylesProduct } from './stylesProduct';
import { asc, desc, init } from '../redux/product';

const ProductStore = () => {

    const products = useSelector(state=> state.product)

    const dispatch = useDispatch() //permet d'utiliser les fonction dans le store

    const ascProduct = () => { // classé par ordre croissant

      console.log("asc")
      dispatch(asc())
      
    }

    const descProduct = () => { // classé par ordre décroissant

      console.log("desc")
      dispatch(desc())

    }

    const initProduct = () => { // remise à 0

      console.log("init")
      dispatch(init())

    }

    useEffect(() => {

      console.log("product load")

    }, [])
    

    // console.log('products' , products )

  return (
    <View>

      <View style={stylesProduct.contentButtonFilter}>
        <Button onPress={ascProduct}>ASC</Button>
        <Button onPress={descProduct}>DESC</Button>
        <Button onPress={initProduct}>INIT</Button>
      </View>

      <FlatList
        data={products}
        renderItem={({item})=><CardProduct product={item}/>}
        keyExtractor={item => item.id}
        numColumns={"2"}
      />
    </View>
  )
}

export default ProductStore