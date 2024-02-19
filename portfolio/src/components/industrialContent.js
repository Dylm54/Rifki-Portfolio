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
import thumbIndustrial1 from "../images/industrial.jpg"
import thumbIndustrial2 from "../images/industrialLogin.png"


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

const WorkIndustrial = () => {
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
                                    Industrial <Badge>2023</Badge>
                                </Heading>
                                <Paragraph>
                                    A Website made based on case study from Advanced Software Engineering Laboratory
                                </Paragraph>
                                <List ml={4} my={4}>
                                    <ListItem>
                                        <Meta>Website</Meta>
                                        <Link className="reactLink" target="_blank" to="https://zoapofficial.netlify.app/" style={{
                                            color: colorMode === "dark" ? "#ff63c3" : "rgb(61, 122, 237)",
                                        }}>
                                            https://industrial-blond.vercel.app/ <ExternalLinkIcon mx="2px" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Meta>Tools</Meta>
                                        <span>React JS, Tailwind CSS, Golang, MySQL</span>
                                    </ListItem>
                                </List>
                                <WorkImage src={thumbIndustrial1} alt="industrial"/>
                                <WorkImage src={thumbIndustrial2} alt="industrial"/>
                            </Container>
                        </motion.div>

                    </motion.div>

                </Container>
                <Footer />
            </Container>
        </Layout>
    )
}

export default WorkIndustrial
