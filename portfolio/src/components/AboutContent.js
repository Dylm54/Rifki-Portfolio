import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    List,
    ListItem,
    Icon,
} from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react";
import profile from "../images/profile1.jpeg";
import { motion } from "framer-motion";
import Paragraph from "./paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "./bio";
import {
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoGithub
} from "react-icons/io5";
import { FaMedium } from "react-icons/fa6";
import Footer from "./footer";
import { Link } from "react-router-dom";
import "../style.css";
import Layout from "./article";

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

const AboutContent = () => {
    const { colorMode } = useColorMode();

    return (
        <Layout

        >
            <Container
                pt="105px"
                maxW={"container.md"}
            >
                <Container pb="100px">
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={item}>
                            <Box borderRadius="lg" p={3} mb={6} align="center" bgColor={colorMode === "dark" ? "whiteAlpha.200" : "whiteAlpha.500"}>
                                Hello, I&apos;m a front-end developer based in Indonesia!
                            </Box>
                            <Box display={{ md: "flex" }} mb={4}>
                                <Box flexGrow={1}>
                                    <Heading as="h2" variant="page-title" fontFamily="M PLUS Rounded 1c" letterSpacing="-0.1rem">
                                        Rifki Hidayatullah
                                    </Heading>
                                    <p>Programmer ( Software Engineer / Web Developer )</p>
                                </Box>
                                <Box
                                    flexShrink={0}
                                    mt={{ base: 4, md: 0 }}
                                    ml={{ md: 6 }}
                                    align="center"
                                >
                                    <Image
                                        borderColor="whiteAlpha.800"
                                        borderWidth={2}
                                        borderStyle="solid"
                                        maxWidth="100px"
                                        w="100px"
                                        maxHeight="100px"
                                        display="inline-block"
                                        borderRadius="full"
                                        objectFit="cover"
                                        src={profile}
                                        alt="Profile Image"
                                    />
                                </Box>
                            </Box>

                        </motion.div>
                        <motion.div
                            variants={item}
                            style={{
                                marginBottom: "1.5rem"
                            }}>
                            <Heading as="h3">About</Heading>
                            <Paragraph
                            >Rifki is a front-end web developer based in Tangerang with passion for learning software engineering. He is a quick learner with academic abilities and technical knowledge to succeed in different roles. He is ready to expand horizons with additional knowledge and abilities gained from training and experience. Always ready to help others and use abilities to support team goals.
                            </Paragraph>
                            <Box align="center" my={4}>
                                <Link to="/works">
                                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My Portfolio</Button>
                                </Link>
                            </Box>
                        </motion.div>
                        <motion.div
                            variants={item}
                            style={{
                                marginBottom: "1.5rem"
                            }}>
                            <Heading as="h3">
                                Bio
                            </Heading>
                            <BioSection>
                                <BioYear>2004</BioYear>
                                Born in Batam, Indonesia.
                            </BioSection>
                            <BioSection>
                                <BioYear>2022</BioYear>
                                Graduated Senior High School at Al Wildan Islamic School 3.
                            </BioSection>
                            <BioSection>
                                <BioYear>2022</BioYear>
                                College Student Majoring in Informatics at Telkom University.
                            </BioSection>
                            <BioSection>
                                <BioYear>2023</BioYear>
                                Software Engineer at Advanced Software Engineering Laboratory.
                            </BioSection>
                            <BioSection>
                                <BioYear>2023</BioYear>
                                Frontend Developer Intern at IEEE Region 10 Young Professionals.
                            </BioSection>
                            <BioSection>
                                <BioYear>2024 to present</BioYear>
                                Head of IT Department at IEEE SB Telkom University.
                            </BioSection>
                        </motion.div>
                        <motion.div
                            variants={item}
                            style={{
                                marginBottom: "1.5rem"
                            }}>
                            <Heading as="h3">I ♥</Heading>
                            <Paragraph
                            >Music, Coding, <Link
                                className="reactLink"
                                target="_blank"
                                to="https://zoapofficial.netlify.app/"
                                style={{
                                    color: colorMode === "dark" ? "#ff63c3" : "rgb(61, 122, 237)",
                                }}
                            >Playing Games</Link>, Art, Movie, Singing, Travelling
                            </Paragraph>
                        </motion.div>
                        <motion.div
                            variants={item}
                            style={{
                                marginBottom: "1.5rem"
                            }}>
                            <Heading as="h3">On the web</Heading>
                            <List>
                                <ListItem>
                                    <Link
                                        to="https://www.linkedin.com/in/rifkihdyth/"
                                        target="_blank"
                                    >
                                        <Button
                                            variant="ghost"
                                            colorScheme="teal"
                                            leftIcon={<Icon as={IoLogoLinkedin} />}

                                        >
                                            @rifkihdyth
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        to="https://www.instagram.com/mrhdyath/"
                                        target="_blank"
                                    >
                                        <Button
                                            variant="ghost"
                                            colorScheme="teal"
                                            leftIcon={<Icon as={IoLogoInstagram} />}
                                        >
                                            @mrhdyath
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        to="https://github.com/Dylm54"
                                        target="_blank"
                                    >
                                        <Button
                                            variant="ghost"
                                            colorScheme="teal"
                                            leftIcon={<Icon as={IoLogoGithub} />}
                                        >
                                            @Dylm54
                                        </Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        to="https://medium.com/@rifki.hdyth"
                                        target="_blank"
                                    >
                                        <Button
                                            variant="ghost"
                                            colorScheme="teal"
                                            leftIcon={<FaMedium />}
                                        >
                                            @rifki.hdyth
                                        </Button>
                                    </Link>
                                </ListItem>
                            </List>
                        </motion.div>
                    </motion.div>
                    
                </Container>
                <Footer />
            </Container>
        </Layout>
    )
}

export default AboutContent;
