import useGenres, { Genre } from "../hooks/useGenres";
import {
  List,
  ListItem,
  Image,
  HStack,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, loading, error } = useGenres();
  if (error) return null;
  if (loading) return <Spinner />;
  return (
    <>
    <List>
    <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>

      {data.map((genre) => (

        <ListItem key={genre.id}>
          <HStack paddingY={2} spacing={3} align="center">
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              objectFit='cover'
            />
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              maxW="140px"
              textAlign="left"
              isTruncated
              overflow="hidden"
              whiteSpace="nowrap"
              display="block"
              pl={1}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
