import useGenres from '../hooks/useGenres'
import { List, ListItem, Text, Image, HStack, Spinner } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url';
const GenreList = () => {
    const {data, loading, error} = useGenres();
    if(error) return null;
    if(loading) return <Spinner>Loading...</Spinner>;
  return (
    <List>
        {data.map((genre) => (
            <ListItem key={genre.id} >
                <HStack paddingY={2}>
                <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} alt={genre.name}/>
                <Text fontSize='lg'>{genre.name}</Text>
                </HStack>
                </ListItem>
        ))}
    </List>
  )
}

export default GenreList