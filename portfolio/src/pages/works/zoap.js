import Navbar from "../../components/nav";
import { Box } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react";
import WorkZoap from "../../components/zoapContent";

const Zoap = () => {
    const { colorMode } = useColorMode();

    return (
        <Box
        as="main"
        pb={8}
        bgColor={ colorMode  === "dark" ? "#202023" : "rgb(240, 231, 219)"}
        >
            <Navbar />
            <WorkZoap />
        </Box>    
    )
}

export default Zoap