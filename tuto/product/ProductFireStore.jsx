import { View, Text , FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react'
import CardProduct from './component/CardProduct';

const ProductFireStore = () => {

    const [products, setProducts] = useState([])

    const init = async () => {

        const snapData = await firestore().collection('product').get()

        console.log('snapData' , snapData)

        const dataProducts = snapData.docs.map(product=>{

            const newData = {...product.data() , id: product.id}

            return newData 

        })
        setProducts(dataProducts)

    }

    useEffect(() => {
      console.log("component load")
      init()
    }, [])
    

  return (
    <View>
      <Text>ProductFireStore</Text>
      <FlatList
        data={products}
        renderItem={({item})=><CardProduct product={item}/>}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  )
}

export default ProductFireStore