import { HStack ,Image,Text} from '@chakra-ui/react'
import logo from '../assets/logo.webp'
const NavBar = () => {
  return (
    <HStack>
     <Image src={logo} alt="Game Hub Logo" boxSize='60px' />
     <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar