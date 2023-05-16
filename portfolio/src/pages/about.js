import AboutContent from "../components/AboutContent"
import Navbar from "../components/nav";
import { Box } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"

const About = () => {
  const { colorMode } = useColorMode();

  return(
    <Box
      as="main"
      pb={8}
      bgColor={ colorMode  === "dark" ? "#202023" : "rgb(240, 231, 219)" }
    >
      <Navbar />
      <AboutContent />
    </Box>
  )
}

export default About 
