import { Container, Heading, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Container
      display={'flex'}
      justifyContent={'space-between'}
      height={'7vh'}
      py={4}
      color={'#fff'}
      maxWidth={'container.lg'}
    >
      <Heading size={'md'} fontWeight={'extrabold'}>
        CrimeReport.
      </Heading>

      <Text>Home</Text>
    </Container>
  );
};

export default Navbar;
