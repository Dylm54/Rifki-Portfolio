import { Container, Badge, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { WorkImage, Meta } from "./workDetail";
import Paragraph from "./paragraph";
import Layout from "./article";
import {
    Heading,
} from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Footer from "./footer";
import { Link } from "react-router-dom";
import "../style.css";
import thumbZoap2 from "../images/zoap2.jpg"
import thumbZoap3 from "../images/zoap3.jpg"


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

const WorkZoap = () => {
    const { colorMode } = useColorMode();

    return (
        <Layout title="Zoap"
        >
            <Container
                pt="105px"
                maxW={"container.md"}
            >
                <Container pb="30px">
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
                            <Container>
                                <Link className="reactLink" to="/works" style={{
                                    color: colorMode === "dark" ? "#ff63c3" : "rgb(61, 122, 237)",
                                }}>
                                    Works
                                </Link>
                                <span>
                                    &nbsp;
                                    <ChevronRightIcon />
                                    &nbsp;
                                </span>
                                <Heading display="inline-block" as="h3" fontSize={20} mb={4} sx={{ textDecoration: "none" }}>
                                    Zoap <Badge>2022</Badge>
                                </Heading>
                                <Paragraph>
                                    An official website of my own Discord server. Made this just for fun and also to enhance my skills.
                                </Paragraph>
                                <List ml={4} my={4}>
                                    <ListItem>
                                        <Meta>Website</Meta>
                                        <Link className="reactLink" target="_blank" to="https://zoapofficial.netlify.app/" style={{
                                            color: colorMode === "dark" ? "#ff63c3" : "rgb(61, 122, 237)",
                                        }}>
                                            https://zoapofficial.netlify.app/ <ExternalLinkIcon mx="2px" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Meta>Tools</Meta>
                                        <span>HTML, CSS, Bootstrap, JavaScript</span>
                                    </ListItem>
                                </List>
                                <WorkImage src={thumbZoap2} alt="zoap"/>
                                <WorkImage src={thumbZoap3} alt="zoap"/>
                            </Container>
                        </motion.div>

                    </motion.div>

                </Container>
                <Footer />
            </Container>
        </Layout>
    )
}

export default WorkZoap
