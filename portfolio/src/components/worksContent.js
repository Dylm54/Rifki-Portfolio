import {
    SimpleGrid,
    Container,
    Heading,
} from "@chakra-ui/react"
import { motion } from "framer-motion";
import Footer from "./footer";
import "../style.css";
import { WorkGridItem, GridItemStyle } from "./grid-item";
import thumbZoap from "../images/zoap.jpeg"
import thumbQuotes from "../images/randomQuotes.png"
import Layout from "./article";
import thumbIEEE from "../images/IEEE.jpg"

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        y: 10
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    }
}

const WorksContent = () => {
    return (
        <Layout
        > 
            <Container
                pt="105px"
                maxW={"container.md"}
            >
                <Container pb="200px">
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div
                            variants={item}
                            style={{
                                marginBottom: "1.5rem"
                            }}>
                            <Heading as="h3" sx={{ textDecoration: "none" }} mb={4}>
                                Works
                            </Heading>
                        </motion.div>
                        <motion.div
                            variants={item}
                            style={{
                                marginBottom: "1.5rem"
                            }}>
                            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                                <GridItemStyle />
                                <WorkGridItem id="ieee" title="IEEE" thumbnail={thumbIEEE}>
                                    A website of the IEEE Telkom University Student Branch Organization <br /> ( <span style={{ color: "#F56565" }}> Under development </span> )
                                </WorkGridItem>
                                <WorkGridItem id="zoap" title="Zoap" thumbnail={thumbZoap}>
                                    An official website of my own Discord server
                                </WorkGridItem>
                                <WorkGridItem id="quotes" title="Random Quotes" thumbnail={thumbQuotes}>
                                    A random quotes machine with a simple colorful UI
                                </WorkGridItem>
                            </SimpleGrid>
                        </motion.div>
                    </motion.div>

                </Container>
                <Footer />
            </Container>
        </Layout>
    )
}

export default WorksContent