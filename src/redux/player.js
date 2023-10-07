import { createSlice } from "@reduxjs/toolkit"

const initState = {

    players:[

        {id: 1 , name: 'Betsy' , tod:[]},
        {id: 2 , name: 'Anne' , tod:[]},
        {id: 3 , name: 'Ludmilla' , tod:[]},
        {id: 4 , name: 'Alyss-Aëlle' , tod:[]},

    ],
    position:0,

}

export const player = createSlice({
    name:'player',
    initialState: initState,
    reducers:{

        addPlayer:(state , action)=>{ // Ajouter un nouveau joueur
            
            // Ajoute un élément à la fin du tableau et retourne la nouvelle liste
            state.players.push(action.payload) 

            return state ;
        }, 

        delPlayer:(state , action)=>{ // Supprimer un joueur

            const newPlayers = state.players.filter(item=>item.id != action.payload.id)
            console.log('newPlayers' , newPlayers)

            const newState = {

                players : newPlayers ,
                position : state.position

            }

            return newState ;
        },

        resetPlayer:(state , action)=>{ // Réinitialisation de la liste des joueurs

            return initState ;
        }, 

        nextPlayer:(state , action)=>{ // Passer au joueur suivant

            console.log("action.payload" , action.payload)

            const newState = {...state , position: action.payload}

            return newState ;
        },
        updateTod:(state , action)=>{
            
            state.players[state.position].tod.push(action.payload)
        }
    }
})

export const { addPlayer , delPlayer , resetPlayer , nextPlayer , updateTod } = player.actions 
export default player.reducer