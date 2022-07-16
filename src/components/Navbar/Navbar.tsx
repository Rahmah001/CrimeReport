import {
  Container,
  Heading,
  HStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { NavbarProps } from 'src/interfaces';

const Navbar: React.FC<NavbarProps> = ({ scrollToCrime, scrollToContact }) => {
  return (
    <Container
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      height={'7vh'}
      pt={'2.5rem'}
      color={'#fff'}
      maxWidth={'container.lg'}
    >
      <Heading size={'md'} fontWeight={'extrabold'}>
        CrimeReport.
      </Heading>

      <HStack spacing={7}>
        <ChakraLink as={Link} to={'/about'}>
          About
        </ChakraLink>
        <ChakraLink onClick={scrollToCrime} as={Link} to={'#'}>
          Services
        </ChakraLink>
        <ChakraLink onClick={scrollToContact} as={Link} to={'#'}>
          Contact
        </ChakraLink>
      </HStack>
    </Container>
  );
};

export default Navbar;
