import React from 'react'
import { Menu, MenuList,MenuItem,MenuButton,Button } from '@chakra-ui/react'
import  {BsChevronDown} from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '@/hooks/useGames';        
const SortSelector = () => {
  return (
<Menu>  
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
        </MenuButton>
        <MenuList>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Year</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Rating</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Newest</MenuItem>

        </MenuList>
    </Menu>  )
}

export default SortSelector