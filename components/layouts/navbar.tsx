import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './themeChangeButton'

interface LinkItemProps {
  href: string
  path: string
  children: React.ReactNode
}

interface NavbarProps {
  path: string
}

const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha')

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = ({ path, ...props }: NavbarProps) => {
  return (
    <Box
      position='fixed'
      as='nav'
      w='100vw'
      backgroundColor={useColorModeValue('#DEE6E5', '#202024')}
      zIndex={9}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.lg'
        wrap='wrap'
        align='center'
        justify='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href='/work' path={path}>
            Work
          </LinkItem>
          <LinkItem href='/about' path={path}>
            About
          </LinkItem>
        </Stack>
        <Box flex={1} align='right'>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                outline={`1px solid ${useColorModeValue(
                  '#202024',
                  'gray.200'
                )}`}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href='/about' passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href='/work' passHref>
                  <MenuItem as={Link}>Work</MenuItem>
                </NextLink>
                <NextLink href='/earnr' passHref>
                  <MenuItem as={Link}>Earnr</MenuItem>
                </NextLink>
                <NextLink href='/neural' passHref>
                  <MenuItem as={Link}>Neural Stimulator</MenuItem>
                </NextLink>
                <NextLink
                  href='https://github.com/SubratShrestha/portfolio-next'
                  passHref
                >
                  <MenuItem as={Link}>Page source</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
