import axios from 'axios'
import Header from '../../components/Header'
import { Components, Main } from './style'
import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import charmander from '../../assets/charmander.svg'
import bulbasaur from '../../assets/bulbasaur.svg'
import squirtle from '../../assets/squirtle.svg'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  const [pokelist, setPokelist] = useState()
  // let Lista = []
  // useEffect(() => {
  //   axios
  //     .get('https://pokeapi.co/api/v2/pokemon/4/')
  //     .then(res => Lista.push(res.data))

  //   console.log(Lista.indexOf())
  // }, [])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => setPokelist(res))
  }, [])

  return (
    <Main>
      <Header title={'PokeGadgets'} />
      <Components>
        <Link to="bulbasaur">
          <Card name="Bulbasaur" alt="bulbasaur-image" img={bulbasaur} />
        </Link>
        <Link to="/charmander">
          <Card name="Charmander" alt="charmeleon-image" img={charmander} />
        </Link>
        <Link to="squirtle">
          <Card name="Squirtle" alt="squirtle-image" img={squirtle} />
        </Link>
      </Components>
      <Footer />
    </Main>
  )
}
