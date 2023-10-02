import { StyleSheet , Dimensions } from 'react-native'

const width = Dimensions.get('window').width ;


export const stylesProduct = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
    },
    cardContent:{
        backgroundColor:'gray',
        width: (width - (10 * 2) - (5 * 4))/2,
        
    },
    cardProduct:{
        margin: 5,
    },
    cardTitle:{
        fontSize:16,
        color:'purple',
        fontWeight: "700",
    },
    cardPrice:{
        fontSize: 14,
        color: 'white',
        fontWeight: "500"
    },
})