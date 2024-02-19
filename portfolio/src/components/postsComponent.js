import {
    SimpleGrid,
    Container,
    Heading,
} from "@chakra-ui/react"
import { motion } from "framer-motion";
import Footer from "./footer";
import "../style.css";
import { PostGridItem, GridItemStyle } from "./grid-item";
import thumbZoap from "../images/zoap.jpeg"
import thumbQuotes from "../images/randomQuotes.png"
import Layout from "./article";
import thumbIEEE from "../images/IEEE.jpg"
import thumbIndustrial from "../images/industrial.jpg";
import thumbDaily from "../images/daily.jpg"
import thumbCalculator from "../images/calculator.jpg"
import post1Thumb from "../images/post1_thumb.png"
import post2Thumb from "../images/post2_thumb.png"
import post3Thumb from "../images/post3_thumb.png"

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

const PostsContent = () => {
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
                                Posts
                            </Heading>
                        </motion.div>
                        <motion.div
                            variants={item}
                            style={{
                                marginBottom: "1.5rem"
                            }}>
                            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                                <GridItemStyle />
                                <PostGridItem 
                                    link="https://medium.com/@rifki.hdyth/selecting-the-best-software-development-methodology-insights-from-a-real-life-case-study-eac3578df162" 
                                    id="post1" 
                                    thumbnail={post1Thumb}
                                    title="Selecting the Best Software Development Methodology: Insights from a Real-Life Case Study"
                                >
                                </PostGridItem>
                                <PostGridItem 
                                    link="https://medium.com/@rifki.hdyth/a-journey-through-software-engineering-requirements-a-case-study-with-the-kano-model-dbfeacae4d32" 
                                    id="post2" 
                                    thumbnail={post2Thumb}
                                    title="A Journey through Software Engineering Requirements: A Case Study with the Kano Model"
                                >
                                </PostGridItem>
                                <PostGridItem 
                                    link="https://medium.com/@rifki.hdyth/computing-fundamentals-in-relation-to-software-engineering-7307fd388567" 
                                    id="post3" 
                                    thumbnail={post3Thumb}
                                    title="Computing fundamentals in relation to software engineering"
                                >
                                </PostGridItem>
                            </SimpleGrid>
                        </motion.div>
                    </motion.div>

                </Container>
                <Footer />
            </Container>
        </Layout>
    )
}

export default PostsContent