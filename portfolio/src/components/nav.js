import {
  Box,
  Stack,
  Flex,
  Container,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
  Text
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/button";
import "../style.css";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      as="nav"
      sx={{
        backdropFilter: "blur(10px)"
      }}
      width="100%"
      bgColor={colorMode === "dark" ? "#20202380" : "#ffffff40"}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW={"container.md"}
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex
          color={colorMode === "dark" ? "alphaWhite.900" : "gray.800"}
          align="center"
          mr={5}

        >
          <Link
            to="/"
            style={{
              "&:hover": {
                textDecoration: "none"
              }
            }}
          >
            <Heading
              p="10px"
              as="h1"
              size="lg"
              lineHeight="20px"
              letterSpacing="-0.1rem"
              fontSize="18px"
              fontFamily="M PLUS Rounded 1c"
              sx={{
                fontWeight: "bold",
              }}
            >
              Rifki Hidayatullah
            </Heading>
          </Link>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          justifyContent="start"
          width={{ base: "full", md: "auto" }}
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          alignItems="center"
          color={colorMode === "dark" ? "alphaWhite.900" : "gray.800"}
        >
          <NavLink
            to="/works"
            className={({ isActive }) => {
              return ( isActive ? 'bg-blue': 'nothing')
            }}
            style={{
              padding: "0.5rem",
            }}
          >
            <Text sx={{
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: 3
              }
            }}>
              Works
            </Text>
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) => {
              return ( isActive ? 'bg-blue': 'nothing')
            }}
            style={{
              padding: "0.5rem",
            }}
          >
            <Text sx={{
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: 3
              }
            }}>
              Posts
            </Text>
          </NavLink>
        </Stack>
        <Box flex={1} align="right">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              style={{
                display: "inline-block"
              }}
              key={useColorModeValue("light", "dark")}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                p={0}
                onClick={() => toggleColorMode()}
                bgColor={colorMode === "dark" ? "orange.200" : "purple.500"}
                color={colorMode === "dark" ? "black" : "white"}
                sx={{
                  "&:hover": {
                    bgColor: colorMode === "dark" ? "orange.300" : "purple.600"
                  }
                }}
              >
                {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              </Button>
            </motion.div>
          </AnimatePresence>
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="options" />
              <MenuList>
                <Link
                  to="/works"
                >
                  <MenuItem sx={{
                    "&:hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: 3
                    }
                  }}>Works</MenuItem>
                </Link>
                <Link
                  to="/posts"
                >
                  <MenuItem sx={{
                    "&:hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: 3
                    }
                  }}>Posts</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default Navbar;
