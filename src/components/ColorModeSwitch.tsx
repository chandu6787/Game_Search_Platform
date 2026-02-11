import { HStack, Switch,Text,useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack >
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} padding={2}/>
        <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch