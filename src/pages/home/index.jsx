import axios from 'axios'
import Header from '../../components/Header'
import { Components, Main } from './style'
import Card from '../../components/Card'
import bulbasaur from '../../assets/bulbasaur.svg'
import squirtle from '../../assets/squirtle.svg'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
const [Charmander, setCharmander] = useState()

  async function getData() {
    try {
      const  pokefire  = await axios.get('https://pokeapi.co/api/v2/pokemon/4/')
      setCharmander(pokefire.data.sprites?.other.dream_world.front_default);
      // console.log(pokefire.data.abilities[0].ability.name);

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
        <Card name="Bulbasaur" alt="bulbasaur-image" img={bulbasaur} />
        <Card name="Charmander" alt="charmeleon-image" img={Charmander} />
        <Card name="Squirtle" alt="squirtle-image" img={squirtle} />
      </Components>
      <Footer />
    </Main>
  )
}
