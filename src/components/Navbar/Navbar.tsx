import { Container, Heading, HStack, Link } from '@chakra-ui/react';

import { NavbarProps } from 'src/interfaces';

const Navbar: React.FC<NavbarProps> = ({
  scrollToCrime,
  scrollToContact,
  scrollToAbout,
}) => {
  return (
    <Container
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      flexDir={{ base: 'column', sm: 'row' }}
      height={'7vh'}
      paddingTop={'1.5rem'}
      color={'#fff'}
      maxWidth={'container.lg'}
    >
      <Heading size={'md'} fontWeight={'extrabold'}>
        CrimeReport.
      </Heading>

      <HStack
        spacing={7}
        marginTop={{ base: '4', sm: 0 }}
        fontSize={{ base: 'sm', sm: 'md' }}
      >
        <Link onClick={scrollToAbout}>About</Link>
        <Link onClick={scrollToCrime}>Services</Link>
        <Link onClick={scrollToContact}>Contact</Link>
      </HStack>
    </Container>
  );
};

export default Navbar;
