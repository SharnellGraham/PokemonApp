import React,{ useEffect, useState } from "react";
import PokemonThumbnail from "./Components/PokemonThumbnail";




function App() {
  const [allPokemons,setAllPokemons] = useState([]);
  const [loadPoke,setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const getAllPokemons = async () =>{
    const res = await fetch(loadPoke)
    const data = await res.json()
    setLoadPoke(data.next)