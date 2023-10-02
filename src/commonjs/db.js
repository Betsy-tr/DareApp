
import firestore from '@react-native-firebase/firestore';


export const loadData = async (collectionName) => { 

    const snapShot = await firestore().collection(collectionName).get()

    // Vérification des données
    if(!snapShot.empty){

        const datas = snapShot.docs.map(doc=>{

            return {id:doc.id , ...doc.data()}
        })
        return datas ;

        
    }else{
        return []
    }

}

/***
 * Cette fonction récupère la liste des actions et des vérités en fonction de l'id de la catégorie
 * params(id <string> : id category)
 * 
***/ 
export const loadDataDareOrTruth = async (id , type) =>{

    console.log("loadDataDareOrTruth" , id , type)

    /* const snapShot = await firestore()
                             .collection("DareOrTruth")
                             .where("categorie" , "==" , id) // Sélection en fonction de la categorie
                             .where('type' , "==" , type)
                             .get() */
    const snapShot = await firestore()
                            .collection("TruthOrDare")
                            .where("category" , "==" , id) // Sélection en fonction de la categorie
                            .where('type' , "==" , type)
                            .get()

    // Vérification des données
    if(!snapShot.empty){

        const datas = snapShot.docs.map(doc=>{

            return {id:doc.id , ...doc.data()}
        })
        return datas ;

        
    }else{
        return []
    }

}