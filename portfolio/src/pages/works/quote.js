import Navbar from "../../components/nav";
import { Box } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react";
import WorkQuote from "../../components/quoteContent";

const Quote = () => {
    const { colorMode } = useColorMode();

    return (
        <Box
        as="main"
        pb={8}
        bgColor={ colorMode  === "dark" ? "#202023" : "rgb(240, 231, 219)"}
        >
            <Navbar />
            <WorkQuote />
        </Box>    
    )
}

export default Quote