import Navbar from "../components/nav";
import { Box } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"
import PostsContent from "../components/postsComponent";

const Posts = () => {
    const { colorMode } = useColorMode();

    return (
        <Box
        as="main"
        pb={8}
        bgColor={ colorMode  === "dark" ? "#202023" : "rgb(240, 231, 219)"}
        >
            <Navbar />
            <PostsContent />
        </Box>    
    )
}

export default Posts