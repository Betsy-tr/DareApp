import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import styles from '../../styles';

const ItemCategory = ({category}) => {

    const navigation = useNavigation()

   /* return(

        <List.Item
            title={category.name}
            onPress={()=>navigation.navigate('TruthOrDare' , {id: category.id})}
        />
    )*/

    return (
        <View style={styles.slide}>
          <Text style={styles.slideTitle}>{category.name}</Text>
          {/* <Image source={{uri: category.image}} /> */}
          <Text style={styles.slideText}>{category.description}</Text>
          {/* <ImageBackground></ImageBackground> */}
        </View>
      );
};

export default ItemCategory;