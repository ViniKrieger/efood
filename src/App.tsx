import { Container, GlobalCss } from './styles'
import Hero from './components/Hero'
import Fundo from './components/FundoHero'

function App() {
  return (
    <>
      <GlobalCss>
        <Fundo />
        <Container>
          <Hero />
        </Container>
      </GlobalCss>
    </>
  )
}

export default App
