import axios from 'axios'
import Header from '../../components/Header'
import { Components, Main } from './style'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
const [Charmander, setCharmander] = useState()
const [Bulbasaur, setBulbasaur] = useState()
const [Squirtle, setSquirtle] = useState()
  async function getData() {
    try {
      const pokegrass = await axios.get('https://pokeapi.co/api/v2/pokemon/1/')
      const  pokefire  = await axios.get('https://pokeapi.co/api/v2/pokemon/4/')
      const  pokewater  = await axios.get('https://pokeapi.co/api/v2/pokemon/7/')
      setCharmander(pokefire.data.sprites?.other.dream_world.front_default);
      // console.log(pokefire.data.abilities[0].ability.name);
      setBulbasaur(pokegrass.data.sprites.other.dream_world.front_default);
      setSquirtle(pokewater.data.sprites.other.dream_world.front_default)

    } catch (error) {
      alert('erro')
    }
  }
  useEffect(()=>{

    getData()
  },[])
  return (
    <Main>
      <Header title={'PokeGadgets'} />
      <Components > 
        <Card name="Bulbasaur" alt="bulbasaur-image" img={Bulbasaur} />
        <Card name="Charmander" alt="charmeleon-image" img={Charmander} />
        <Card name="Squirtle" alt="squirtle-image" img={Squirtle} />
      </Components>
      <Footer />
    </Main>
  )
}
