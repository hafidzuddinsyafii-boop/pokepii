// PokemonList.jsx
import pokemonJSON from "../../data/pokemon.json";
import PokemonItem from '../PokemonItem/PokemonItem';
import { useState } from 'react'; // Pastikan useState di-import
import "./PokemonList.css";

function PokemonList() {
  // Pastikan inisialisasi state menggunakan data JASON yang di-import
  const [pokemons] = useState(pokemonJSON); // Gunakan 'pokemons' untuk data asli, tidak perlu setter jika tidak diubah
  const [filterPokemons, setFilterPokemons] = useState(pokemonJSON); // Gunakan 'filterPokemons' untuk data yang ditampilkan

  const handleSearch = (e) => {
    // 1. Ambil nilai input
    const searchTerm = e.target.value.toLowerCase();
    
    // 2. Filter data asli (pokemons)
    const filtered = pokemons.filter((item) => {
      // Pastikan properti 'name' ada di objek item.
      return item.name.toLowerCase().includes(searchTerm);
    });
    
    // 3. Update state 'filterPokemons' dengan hasil filter
    setFilterPokemons(filtered);
  };

  return (
    <div className="bg">
      <input 
        type="text" 
        placeholder="cari pet lu" 
        className="search" 
        onChange={handleSearch} // Panggil handleSearch saat ada perubahan input
      />

      <div className="list-pokemon">
        {filterPokemons.length === 0 ? (
          <div>Tidak ada pokemon</div>
        ) : (
          filterPokemons.map((item) => (
            <PokemonItem 
              key={item.id} 
              pokemon={item} // Pastikan properti 'pokemon' diteruskan ke PokemonItem
            />
          ))
        )}
      </div>
    </div>
  );
}

export default PokemonList;