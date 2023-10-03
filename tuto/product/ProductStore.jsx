import { View, Text , FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from './component/CardProduct'
import firestore from '@react-native-firebase/firestore';

const ProductStore = () => {

    const products = useSelector(state=> state.product)

    useEffect(() => {

      console.log("product load")

      products.map(async (item) =>{

        firestore().collection('product').add(item)
        
        console.log("item" , item.id)

      })
    }, [])
    

    // console.log('products' , products )

  return (
    <View>
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