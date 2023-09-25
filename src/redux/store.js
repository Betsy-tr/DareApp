import { configureStore } from '@reduxjs/toolkit'
import player from './player'

export const store = configureStore({
    reducer:{
        player: player,
    }
})