import axios from 'axios'
import Header from '../../components/Header'
import { Components, Main } from './style'
import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import charmander from '../../assets/charmander.svg'
import bulbasaur from '../../assets/bulbasaur.svg'
import squirtle from '../../assets/squirtle.svg'
import Footer from '../../components/Footer'

export default function Home() {
  const [pokelist, setPokelist] = useState()

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => setPokelist(res))
  }, [])

  return (
    <Main>
      <Header title={'PokeGadgets'} />
      <Components>
        <Card name="Bulbasaur" alt="bulbasaur-image" img={bulbasaur} />
        <Card name="Charmander" alt="charmeleon-image" img={charmander} $fire />
        <Card name="Squirtle" alt="squirtle-image" img={squirtle} />
      </Components>
      <Footer />
    </Main>
  )
}
