import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/app/pokemons';

interface PokemonsState{
    favorites: {[key : string]: SimplePokemon},
}

// const getInitialState = ():PokemonsState => {
   // if( typeof localStorage === 'undefined' ) return {};
//   const favorites = JSON.parse( localStorage.getItem('favorites-pokemon') ?? '{}' );
//   return favorites;
// }

const initialState:PokemonsState = {
    // ...getInitialState(),
    favorites: {},
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons( state, action: PayloadAction<{[key : string]: SimplePokemon}> ){
      state.favorites = action.payload;
    },

    toggleFavorite( state, action: PayloadAction<SimplePokemon> ){
        const pokemon = action.payload;
        const { id } = pokemon;

        if( !!state.favorites[id] ){
            delete state.favorites[id];
            // return;
        }else{
          state.favorites[id] = pokemon;
        }

        //TODO: DON'T DO IT IN REDUX
        localStorage.setItem('favorites-pokemon', JSON.stringify( state.favorites ));
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;