import { FavoritePokemons } from "@/app/pokemons/components/FavoritePokemons";

export const metadata = {
 title: 'Favorite Pokemons',
 description: 'This page contains your favourites pokemons',
};

export default async function PokemonsPage() {

  

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Favorites Pokemons <small className="text-blue-500">Global state</small></span>
      <FavoritePokemons />
    </div>
  );
}

