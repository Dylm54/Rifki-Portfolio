import { Link } from "react-router-dom"
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  Divider
} from "@chakra-ui/react"
import Navbar from "../components/nav";

const NotFound = () => {
  return (
    <Container>
      <Navbar />
      <Heading as="h1">
        Not Found
      </Heading>
      <Text>The page you&apos;re looking for was not found.</Text>  
      <Divider my={6}/>

      <Box my={6} align="center">
        <Link to="/">
          <Button colorScheme="teal">Return to home</Button>
        </Link>
      </Box>
    </Container>
  )
}

export default NotFound
