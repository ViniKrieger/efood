import { HeroBar, Logo, Texto } from './styles'

import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <HeroBar>
    <Logo>
      <img src={logo} alt="Logo EFood" />
    </Logo>
    <Texto>Viva experiências gastronômicas no conforto da sua casa</Texto>
  </HeroBar>
)

export default Hero
