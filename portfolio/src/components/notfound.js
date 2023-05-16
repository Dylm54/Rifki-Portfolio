import {
    Box,
    Container,
    Heading,
    Divider,
    Text,
    Button
} from "@chakra-ui/react"
import Footer from "./footer";
import { Link } from "react-router-dom";
import "../style.css";
import Layout from "./article";

const NotFound = () => {
    return (
        <Layout
        >
            <Container
                maxW={"container.md"}
                pt="160px"
                h="100vh"
            >
                <Container>
                    <Heading as="h1">
                        Not Found
                    </Heading>
                    <Text>The page you&apos;re looking for was not found.</Text>
                    <Divider my={6} />

                    <Box my={6} align="center">
                        <Link to="/">
                            <Button colorScheme="teal">Return to home</Button>
                        </Link>
                    </Box>

                </Container>
                
            </Container>
            <Footer />
        </Layout>
    )
}

export default NotFound
