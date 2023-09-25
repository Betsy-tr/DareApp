import { createSlice } from "@reduxjs/toolkit"

const initState = {

    players:[],
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
    }
})

export const { addPlayer , delPlayer , resetPlayer } = player.actions 
export default player.reducer