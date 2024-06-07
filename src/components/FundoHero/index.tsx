import { HeroBar } from '../Hero/styles'
import fundoHero from '../../assets/images/fundoHero.svg'

const Fundo = () => (
  <HeroBar style={{ backgroundImage: `url(${fundoHero})` }}></HeroBar>
)

export default Fundo
